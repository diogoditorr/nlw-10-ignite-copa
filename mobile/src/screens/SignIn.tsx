import { StatusBar } from "expo-status-bar";
import { Center, Text } from "native-base";
import React from "react";

export function SignIn() {
    return (
        <Center flex={1} bgColor="gray.900">
            <Text color="white" fontSize={24} fontFamily="heading">
                Sign In
            </Text>
        </Center>
    );
}
