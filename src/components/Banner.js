import '../styles/Banner.css'

export let title = 'la maison jungle';
export let description = 'Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍';

export function Header() {
    return (
        <h1>{title.toUpperCase()}</h1>
    )
}

export function Description() {
    return (
        <p>{description}</p>
    )
}

export function Banner() {
    return (
    <div>
        <Header />
        <Description />
    </div>
    )
}