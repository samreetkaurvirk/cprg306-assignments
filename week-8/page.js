// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
export default function Login() {
    // Access user object and login/logout functions using the useUserAuth hook
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    // Function to handle GitHub sign-in
    async function handleSignIn() {
        try {
            // Perform sign-in using GitHub authentication via Firebase
            await gitHubSignIn();
        }
        catch (error) {
            console.log(error); // Log any errors encountered during sign-in
        }
    }

    // Function to handle sign-out
    async function handleSignOut() {
        try {
            // Perform sign-out from Firebase
            await firebaseSignOut();
        }
        catch (error) {
            console.log(error); // Log any errors encountered during sign-out
        }
    }

    // Render login page content
    return (
        <div className="text-lg">
            <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
            {user ? (
                <div className="text-lg">
                    {/* Display user information if logged in */}
                    <p>
                        Signed in as {user.displayName} {user.email}
                    </p>
                    {/* Button to sign out */}
                    <button
                        onClick={handleSignOut}
                        className="text-lg m-2 hover:underline">
                        Sign Out
                    </button>                    
                    {/* Link to shopping list if logged in */}
                    <p>
                        <a className="text-lg hover:underline" href="/week-8/shopping-list">Continue to your Shopping List</a>
                    </p>
                </div>
            ) : (
                // Button to initiate GitHub sign-in if not logged in
                <button onClick={handleSignIn} className="text-lg m-2 hover:underline">
                        Sign in with GitHub
                </button>
            )}
        </div>
      );    
}
