# Messari Subgraph CLI

A CLI for messari subgraph development. This CLI serves as a wrapper around the [graph-cli] as is relies on the [graph-cli] to codegen, build, and deploy subgraphs. This CLI is built using the gluegun framework just like the [graph-cli].

**See Messari Subgraphs Repo:**
https://github.com/messari/subgraphs

**More on Messari Subgraph workflow with Subgraph CLI:**
https://github.com/messari/subgraphs#:~:text=Video%20Walkthrough%20Series%20of%20Subgraph%20Development%20Workflow%20for%20Messari

**See Graph CLI:** 
https://github.com/graphprotocol/graph-cli

## Customizing your CLI (Gluegun Documentation)

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs and https://infinitered.github.io/gluegun/#/?id=quick-start.

## Commands

- `messari build`

  - Description: Used for building and deploying subgraphs.
  - Installation Instructions:

    - `npm install -g messari-subgraph-cli`
    - `npm install -g mustache` - If not already installed

  - Preparation:

    - This command requires that the subgraph directory which you want to this command meets the `folderslint` standard (see **repo-root**/docs/Contributing.md ).
    - Additionally, you must have an entry for the deployment you are trying to execute within the deployment.json file in the `**repo-root**/deployment/` folder.

  - Usage:
    - This command can be run anywhere within your local copy of the Messari/Subgraphs repo.
    - Run `messari b` or `messari build` to be prompted for building a subgraph.
    - Run `messari b -d` to be prompted to build and then deploy subgraphs.
    - Run `messari b -h` to be shown a list of optional paramters you can use to bypass prompts or add extra detail about the build/deployment you would like to execute.
    - The deployment id can be passed as the first argument without specifying an option.
    - Optional parameters can be passed to bypass the prompts. For example, `messari b uniswap-v2-ethereum -s messari -d` will build and deploy the `uniswap-v2-ethereum` subgraph to messari subgraph.

# License

MIT - see LICENSE
