import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import { 
        Container,
        Header,
        UserWrapper,
        UserInfo,
        Photo,
        User,
        UserGreeting,
        UserName,
        Icon,
        HighlightCards,
        Transactions,
        Title

}from './styles'

export function Dashboard(){
    return (
        <Container >

            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/69989716?v=4'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Miltin</UserName>
                        </User>
                    </UserInfo>
                    
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>

                <HighlightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril"/>
                <HighlightCard 
                    type="down"
                    title="Saida" 
                    amount="R$ 1.259,00" 
                    lastTransaction="Última saida dia 03 de abril"/>
                <HighlightCard
                    type="total" 
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 á 16 de abril"/>

            </HighlightCards>

            <Transactions>
                <Title> Listagem </Title>

                <TransactionCard />
            </Transactions>

        </Container>
    )
}

