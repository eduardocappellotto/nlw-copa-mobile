import { Center, Text, Image, Icon } from "native-base";

import { Fontisto } from "@expo/vector-icons";

import Logo from "../assets/logo.svg";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";

export function SignIn() {
  const { signIn, user } = useAuth();

  console.log("dados do usuario => ", user);
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        type="SECONDARY"
        leftIcon={<Icon as={Fontisto} name="google" />}
        title="ENTRAR COM GOOGLE"
        mt={12}
        onPress={signIn}
      />
      <Text mt={6} color="white" textAlign="center">
        Não utilizamos nenhuma informação além {"\n"} do seu e-mail para criação
        de sua conta.
      </Text>
    </Center>
  );
}
