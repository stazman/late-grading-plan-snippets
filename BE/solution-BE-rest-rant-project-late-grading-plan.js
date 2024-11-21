// Teacher Solution Document for REST-Rant Project

// Summary of Key Objectives and Technologies Used
// Learn to build a full-stack web application using:
// - Node.js: Executes server-side JavaScript.
// - Express: Manages routing and middleware.
// - React: Enables server-side rendering.
// - MongoDB and Mongoose: Handles database operations.
// - CSS and Bootstrap: Styles the frontend.

// The project focuses on CRUD operations, managing data through a web interface, and understanding full-stack dynamics.

// Introduction Script for Project Session
// "Welcome to today's session on building a full-stack application with Node.js, Express, and React. Our focus is the REST-Rant project, a restaurant review platform. This application lets users add, view, edit, and delete restaurant details and reviews. We’ll explore server-side rendering with React, manage data with MongoDB and Mongoose, and ensure user-friendliness with Bootstrap. By the end of this project, you will understand how to integrate various technologies to build and deploy dynamic web applications relevant to real-world scenarios."

// Specific Questions, Suggested Responses, and References with Code Snippets

// 1. How does the application handle 404 errors for undefined routes?
// Response: Uses Express middleware to catch all undefined routes and renders a 404 error page.
app.get('*', (req, res) => { res.render('error404') });

// 2. Describe the MVC architecture pattern.
// Response: Organizes code into models, views, and controllers to separate concerns.
// Models in './models'
// Views in './views'
// Controllers in './controllers/places'

// 3. Purpose of methodOverride middleware.
// Response: Allows HTML forms to simulate PUT and DELETE methods.
app.use(methodOverride('_method'));

// 4. Explain asynchronous operations in seed-comments.js.
// Response: Uses async/await to handle database operations sequentially.
async function seed() {
    // async operations
}

// 5. How are images served correctly to the client?
// Response: Uses Express's static middleware.
app.use(express.static('public'));

// 6. Role of the Def component in React views.
// Response: Acts as a layout template providing consistent structure.
function Def({ children }) {
    return <html><body>{children}</body></html>;
}

// 7. How are new places added to the database?
// Response: Through a form submission handled by an Express route.
router.post('/places', function(req, res) {
    // Add new place
});

// 8. Describe server-side rendering with React.
// Response: React components define HTML structure, rendered on the server.
app.engine('jsx', require('express-react-views').createEngine());

// Fill-in-the-Blanks Exercise with Code Snippets

// The middleware used to catch all undefined routes is _______('*', (req, res) => { res.render('error404') }).
// MVC stands for _______, _______, and _______.
// PUT and DELETE methods in forms are supported by _______('_method').
// _______ function seed() is used for seeding the database.
// Static files are served using _______('/public').
// _______ acts as a layout template in React views.
// New places are added through a _______ submission that posts to a specific route.
// Server-side rendering with React uses _______('jsx', require('express-react-views').createEngine()).

// Answer Key:
// app.get
// Model, View, Controller
// app.use(methodOverride
// async
// app.use(express.static
// Def
// form
// app.engine

// Coding Challenge Example Solution Code:

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

// Explanation of the Code:
// -- The server route checks for a cuisine query parameter and uses it to filter the database query.
// -- The index view includes a form with a dropdown to select cuisines, which upon submission, reroutes to the index with the selected cuisine as a query parameter.
// -- This ensures the page only displays places that match the selected cuisine, and it utilizes React for server-side rendering based on the filtered results.
