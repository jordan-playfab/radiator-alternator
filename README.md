# Radiator Alternator

Scaffolding for a demo multiplayer game for PlayFab from the 2020 Microsoft Hackathon. Unfortunately, the project's scope exceeded the Hackathon's bounds, but we have some useful learnings to share.

# Design

A car-based package delivery game. You deliver packages from city to city. Players can go solo or form groups to act as convoys and help deliver large numbers of items.

Players upgrade their cars (semi trucks?) to carry more items or have a bigger fuel tank. Challenges on the road could be tire blowouts or traffic jams. You could carry some items in your car to fix your tire, or other people in your convoy could be dedicated repair-ers and let you focus on having a huge cargo bay. Upgrades to engines and suspension could mean you get to your destination "faster" and make more money.

# Instructions

1. Clone this repository
    ```powershell
    git clone https://github.com/jordan-playfab/radiator-alternator.git
    ```
1. Install the dependencies
    ```powershell
    npm install
    ```
1. Open this folder in [Visual Studio Code](https://code.visualstudio.com/)
1. Install the recommended extensions. VSCode should prompt you. If it doesn't, open `.vscode/extensions.json` and search for those extension names in the Extensions tab on the left.
1. Run the project using **Terminal > Run Build Task** or **Ctrl-Shift-B**
1. Your browser should open `http://localhost:3000`
1. Keep Visual Studio Code open. Whenever you save a file it will automatically recompile and reload the page you are on.

## Tips

-   Use Ctrl-. (period) to activate the ESLint suggestions like removing unused code.
-   The Prettier extension makes it so much easier to have consistently formatted code. Don't bother adding semicolons or parenthesis: Prettier will do it for you!
-   When you start the build script in Visual Studio Code, it won't pop up a window in the editor. Instead, you'll see detailed error messages in the browser immediately.
-   Be sure to address all the ESLint suggestions like unused code before submitting a pull request. The build process will treat those as errors and fail if you have so much as a variable declared that you're not using.

# Learnings

## Microsoft Azure

It's possible to host a React site on Azure Blob Storage, using a Premium Verizon CDN, and use BrowserRouter to have nice URIs. Theoretically we could host a next-generation version of Game Manager React decoupled from the C# site on blob storage for a handful of bucks a month.

The CDN rule for that looks like:

```
IF - GENERAL - ALWAYS
    URL - URL REWRITE
        SOURCE: /80ACB123/mysite/^(?!.*[.](?:js|json|jpg|jpeg|png|gif|ico|svg|txt)$).*$
        DESTINATION: /80ABC123/mysite/index.html
```

GitHub actions are great for continuous deployment. See [.github/workflows/actions.yml](https://github.com/jordan-playfab/radiator-alternator/blob/main/.github/workflows/actions.yml) which I used to build and deploy this site to Azure. In the Azure Portal Shell you run this command to generate the AZURE_CREDENTIALS which you store in GitHub (along with the storage account name and others).

```bash
# Generate Azure credentials
az ad sp create-for-rbac --name "http://MySiteOnGitHub" --role contributor --scopes /subscriptions/123-my-subscription-id/resourceGroups/my-resource-group-name --sdk-auth
```

One thing I couldn't get working was to have the `az storage blob delete-batch` command delete files older than 1 hour. There's supposed to be an `--if-unmodified-since` flag but everything I tried threw up syntax errors. That's why it deletes all the files in the blob storage before uploading new ones. Bad practice, but on low traffic sites this is probably fine.

## Azure PlayFab

Our Node SDK works perfectly fine when used in React apps. The TypeScript definitions are loaded and we can bring in each API individually (e.g. Groups, Economy, Client).

The beta Node SDK doesn't generate correctly. Even when you specify the beta flag it skips over beta APIs and methods. I had to manually edit [generate.js](https://github.com/PlayFab/SDKGenerator/blob/master/generate.js#L454) to short-circuit all the parts where it would omit beta APIs.

You can manually add packages that sit inside the repository. For instance:

#### package.json

```json
{
	"dependencies": {
		"playfab-sdk": "file:./src/playfab-beta-sdk"
	}
}
```

#### package-lock.json

```json
{
	"dependencies": {
		"playfab-sdk": {
			"version": "file:src/playfab-beta-sdk"
		}
	}
}
```

## React

The ESLint and Prettier extensions are terrific and essential to a pleasant development experience. We should require the use of them and process our existing code base to match that formatting.

Writing components using Atomic design is extremely difficult to maintain even when you're writing and designing the entire thing yourself. I tried naming components with Atom, Molecule, Organism, etc. and putting them in /01-atom, /02-molecule folders as the [Atomic design methodology shows](https://atomicdesign.bradfrost.com/chapter-2/), but it quickly became unusable. The file names were unreadable and the judgement calls about molecules vs. organisms was too difficult.

Writing pages as functional components with their own custom hooks is a great methodology. The login page is a great example with [login.tsx](https://github.com/jordan-playfab/radiator-alternator/blob/main/src/components/login/login.tsx) and [use-login.ts](https://github.com/jordan-playfab/radiator-alternator/blob/main/src/components/login/use-login.ts).

## Redux

The [Redux Toolkit](https://redux-toolkit.js.org/) makes life with Redux so much easier. A reducer and initial state can look like this simple [site.ts](https://github.com/jordan-playfab/radiator-alternator/blob/main/src/reducers/site.ts) file. Then you build a [store](https://github.com/jordan-playfab/radiator-alternator/blob/main/src/store.tsx) by combining the reducers together and you're done.
