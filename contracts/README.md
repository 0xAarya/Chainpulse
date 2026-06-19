# ChainPulse Solidity Backend

`ChainPulseRegistry.sol` is a simple smart contract backend for the ChainPulse dashboard.

It stores:

- Web3 community records
- Member counts
- Growth percentages
- Event records
- Event status
- Community follow-up notes

## Why Solidity Here?

In a Web3 product, the smart contract can act as the trusted data layer. Instead of using a database, the project can store important community and event records on-chain.

For this portfolio project, the contract is intentionally simple so the logic is easy to explain in an interview.

## Main Contract Ideas

- `owner`: The wallet that can update community and event data.
- `Community`: A struct for community analytics.
- `CommunityEvent`: A struct for event analytics.
- `mapping`: Stores records by ID.
- `event`: Emits update logs when records are added or changed.
- `modifier onlyOwner`: Restricts updates to the owner wallet.

## Example Interview Explanation

The React app shows community analytics in the UI. The Solidity contract is the Web3 backend that could store the source data for communities and events. A real production version would connect the frontend using a wallet and a library like ethers or viem, but this portfolio version keeps the frontend simple and focuses on readable React and Solidity basics.
