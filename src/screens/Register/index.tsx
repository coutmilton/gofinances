import React from "react";

import { Input } from "../../components/Forms/Input"
import { Button } from "../../components/Forms/Button"

import { 
    Container,
    Header,
    Title,
    Form,
    Fields
 } from "./style";

export function Register() {
    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>

            </Header>

            <Form>
                <Fields>
                    <Input 
                        placeholder="Nome"
                    />
                    <Input 
                        placeholder="Preço"
                    />
                </Fields>
                <Button title = "Enviar"/>
            </Form>

        </Container>
    );

};