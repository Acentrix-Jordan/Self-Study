# Real DOM

The DOM is a tree like structure of our web application.

                   App
                    |
          _______________________
         |          |            |
        H1       CardList    SearchBox
                    |
      _________________________________
      |       |      |        |      |
    Card    Card    Card    Card    Card

Updating the Real DOM is computational expensive.

# Virtual DOM

React creates a copy of the Real DOM using Javascript

When the user performs an action, for example types in a searchbox.

React will create a second copy of the virtual DOM as it keeps the orginal as a Snapshot.

A snapshot is what the real DOM currently looks like

React then makes changes to the copy of the Virtual DOM. Once all the changes have occured, the Copy of the Virtual DOM is compared to the Virtual DOM Snapshot. Once changes have been identified. The Real DOM is updated to reflect the virtual DOM. This is a more efficient way of updating the DOM instead of directly manipulting it as JS is much faster and more efficent at computational processes.
