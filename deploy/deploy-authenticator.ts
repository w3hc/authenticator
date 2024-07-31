import "@nomiclabs/hardhat-ethers"
import color from "cli-color"
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"

export default async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments

    function wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const { deployer } = await getNamedAccounts()
    console.log("deployer:", deployer)

    const authenticator = await deploy("Authenticator", {
        from: deployer,
        log: true
    })

    switch (hre.network.name) {
        case "sepolia":
            try {
                console.log(
                    "Authenticator deployed:",
                    msg(authenticator.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                await wait(90 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: authenticator.receipt.contractAddress,
                    constructorArguments: []
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break

        case "optimism":
            try {
                console.log(
                    "Authenticator contract deployed:",
                    msg(authenticator.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                await wait(20 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: authenticator.receipt.contractAddress,
                    constructorArguments: []
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break

        case "op-sepolia":
            try {
                console.log(
                    "Authenticator deployed:",
                    msg(authenticator.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                await wait(90 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: authenticator.receipt.contractAddress,
                    constructorArguments: []
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break
    }
}
export const tags = ["Authenticator"]
