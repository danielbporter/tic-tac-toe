# A simple Tic-Tac-Toe game.

## Motivations
The real goal of this project is to setup a "Best Practices" reference project, using up-to-date technologies. The specific goals for this project are:
* A client-server application written entirely in JavaScript.
* The server-side application will use idiomatic node.js. So far, it looks like Express.js will be the main... thing.
    * Use a highly configurable, production-ready logging framework that supports structured logs.
* The client-side application will use standard HTML, CSS, and JavaScript.
    * Use plain JavaScript without any UI framework or unique pattern. No Angular, no Ember, no React, etc....
    * Use utility libraries like JQuery or Lodash only if ABSOLUTELY needed.
    * Use plain CSS, not SASS, LESS, or any other CSS technologies.
    * Use plain HTML, not something like HAML. TBD if templates or whatever will be needed, but if they are, use a plain, minimal, and battle-proven template library.
* Use PostgreSQL for all persistence needs. Try and stick to SQL-standard things and avoid the fun stuff like JSON storage.
    * TBD if a SQL generator or ORM will be used.
* Use "yarn" for dependency management.
* Automated unit, integration, and functional testing using the AVA test runner. There might be a need to use another tool for integration or functional tests.
* Continuous Integration and Continuous Delivery using Jenkins.
* Follow production deployment best practices in my production deployment. TBD what exactly this means, but probably:
    * Use a process manager.
    * Use an init system (systemd?).
* Use Nginx as a reverse-proxy in the production environment.
