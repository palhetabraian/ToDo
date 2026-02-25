import Text from './components/text';

export default function App() {
    return (
        <div className="flex flex-col gap-2">
            <Text variant="body-sm-bold" className="text-pink-base">
                Ola mundo!
            </Text>
            <Text className="text-green-base">Ola mundo!</Text>
            <Text variant="body-md-bold">Ola mundo!</Text>
            <Text variant="body-md-bold">Levar o dog pra passear</Text>
        </div>
    );
}
