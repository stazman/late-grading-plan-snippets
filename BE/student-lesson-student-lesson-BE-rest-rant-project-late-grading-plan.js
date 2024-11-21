// Student Lesson for REST-Rant Project Late Grading Plan

// Summary of Key Objectives and Technologies Used
// Build a full-stack web application using Node.js, Express, React, MongoDB, and Mongoose. Learn CRUD operations and server-side dynamics.

// Introduction Script for Project Session
// "Welcome to today's session on the REST-Rant project. Learn to build and manage a dynamic web application focusing on a restaurant review platform."

// Specific Questions and Code Snippets

// How does the application handle 404 errors for undefined routes?
app.get('*', (req, res) => { res.render('error404') });

// Describe the MVC architecture pattern.
// Models in './models'
// Views in './views'
// Controllers in './controllers/places'

// What is the purpose of the methodOverride middleware in this project?
app.use(methodOverride('_method'));

// Explain how the seed-comments.js script works with asynchronous operations.
async function seed() {
    // async operations
}

// How does the project ensure that images are served correctly to the client?
app.use(express.static('public'));

// What is the role of the Def component in the React views?
function Def({ children }) {
    return <html><body>{children}</body></html>;
}

// How are new places added to the database?
router.post('/places', function(req, res) {
    // Add new place
});

// Describe server-side rendering with React.
app.engine('jsx', require('express-react-views').createEngine());

// Fill-in-the-Blanks Exercise with Code Snippets

// The middleware used to catch all undefined routes is _______('*', (req, res) => { res.render('error404') });
// MVC stands for _______, _______, and _______.
// PUT and DELETE methods in forms are supported by _______('_method');
// _______ function seed() is used for seeding the database.
// Static files are served using _______('/public').
// _______ acts as a layout template in React views.
// New places are added through a _______ submission that posts to a specific route.
// Server-side rendering with React uses _______('jsx', require('express-react-views').createEngine());

// Short Coding Challenge

// Challenge: Implement a feature to filter places by cuisine type on the index page.

// Tasks:
// Add a dropdown form that submits a GET request with the selected cuisine as a query parameter.
// Modify the index route handler to filter the displayed places based on the cuisine query parameter.

// Coding Challenge Example Code:

// In the places controller (places.js)
router.get("/", async (req, res) => {
    let query = {};
    if (req.query.cuisine) {
        query.cuisine = req.query.cuisine;
    }
    try {
        const places = await db.Place.find(query);
        res.render("places/index", { places });
    } catch (err) {
        res.status(500).send("Error accessing the database");
    }
});

// In the index view (index.jsx)
function Index({ places }) {
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <form method="GET">
                    <select name="cuisine">
                        <option value="">All Cuisines</option>
                        <option value="Italian">Italian</option>
                        <option value="Mexican">Mexican</option>
                        // Add other cuisine types here
                    </select>
                    <button type="submit">Filter</button>
                </form>
                <div className="row">
                    {places.map(place => (
                        <div className="col-sm-6">
                            <h2><a href={`/places/${place._id}`}>{place.name}</a></h2>
                            <p>{place.cuisine}</p>
                        </div>
                    ))}
                </div>
            </main>
        </Def>
    );
}
module.exports = Index;