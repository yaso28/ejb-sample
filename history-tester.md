<!-- omit in toc -->
# history ejb1

upper is newer.

- [implemented ui1 info command](#implemented-ui1-info-command)
- [enabled to load command args](#enabled-to-load-command-args)
- [enabled env file management](#enabled-env-file-management)
- [created project](#created-project)

## implemented ui1 info command

- npm install axios
- npm install csv
- npm install cli-progress
- npm install dayjs
- mkdir services
- touch services/api-caller.js
- touch services/csv-parser.js
- touch services/report-writer.js
- mkdir commands
- mkdir commands/ui1
- touch commands/ui1/info.js
- edited index.js
- mkdir reports
- touch reports/.gitignore

## enabled to load command args

- npm install commander
- edited index.js

## enabled env file management

- npm install dotenv
- touch .env
- cp .env .env.example
- touch .gitignore
- edited index.js

## created project

- mkdir tester
- cd tester
- npm init -y
- touch index.js
- edited package.json
