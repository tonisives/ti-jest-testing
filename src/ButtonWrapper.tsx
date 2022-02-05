import { useWallet } from '@terra-money/wallet-provider'

export const ButtonWrapper: React.FunctionComponent<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        title: string
    }
> = ({ title, ...props }) => {
    const { connect, disconnect } = useWallet()

    return <button {...props}>{title}</button>
}
