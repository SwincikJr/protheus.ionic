#INCLUDE "TOTVS.CH"
#INCLUDE "RESTFUL.CH"
#INCLUDE "PROTHEUS.CH"
#INCLUDE "TBICONN.CH"

WSRESTFUL produto DESCRIPTION "Classe Rest de teste"

    WSMETHOD GET DESCRIPTION "Exemplo de método GET para Produtos" WSSYNTAX "/produto || /produto/{first} || /produto/{first}/{limit}"

END WSRESTFUL

WSMETHOD GET WSRECEIVE name WSSERVICE produto

    Local nFirst := 1
    Local nLimit := 10
    Local nX := 0

    If Len(::aURLParms) > 0
        nFirst := Val(::aURLParms[1])
    EndIf

    If Len(::aURLParms) > 1
        nLimit := Val(::aURLParms[2])
    EndIf

    PREPARE ENVIRONMENT EMPRESA "T1" FILIAL "D MG 01 " USER 'admin' PASSWORD '1234'

    ::SetContentType("application/json")

    SB1->(dbSetOrder(1))
    SB1->(dbGoTop())

    If nFirst > 1
        SB1->(dbSkip(nFirst - 1))
    EndIf

    ::SetResponse('{ "Produtos": [')

    For nX := 1 To nLimit

        If SB1->(EoF())
            Exit
        EndIf

        If nX > 1
            ::SetResponse(", ")
        EndIf

        ::SetResponse('{ "Filial": "' + SB1->B1_FILIAL + '", "Codigo": "' + SB1->B1_COD + '" }')

        SB1->(dbSkip())

    Next

    ::SetResponse("]}")

Return .T.
