import { Center, Spinner } from "native-base";

type Props = {
    title?: string;
};

export function Loading({ title }: Props) {
    return (
        <Center flex={1} bg="gray.900">
            {title || "Loading"}
            <Spinner color="yellow.500" />
        </Center>
    );
}
