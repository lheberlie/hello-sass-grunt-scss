# hello-sass-grunt-scss

A simple starter sample showing how to use Grunt task runner and Sass to compile your stylesheets.

## Requirements

* Node.js
* Grunt
* Ruby
* Sass

### Quickstart

#### Install [Homebrew](http://brew.sh)

```  
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

#### Update Ruby

```
brew upgrade ruby
```

#### Install Git

```
brew install git
```

#### Install [Node.js](http://nodejs.org)

```
brew install node
```

#### Install [Grunt](http://gruntjs.com/getting-started)

```
npm install -g grunt-cli
```

#### Install sass

```
gem install sass
```

#### Clone the repo

```
git clone https://github.com/lheberlie/hello-sass-grunt-scss.git
```
### Open a terminal window at the repo (```hello-sass-grunt-scss```) location

```
heb:hello-sass-grunt-scss$ 
```

### Setup the ```dependencies```

```
npm install
```

#### Compile the scss file using the ```sass``` task

```
heb:hello-sass-grunt-scss$ grunt sass
Running "sass:dist" (sass) task
sass/style.scss:94 DEBUG: spring
sass/style.scss:94 DEBUG: summer
sass/style.scss:94 DEBUG: fall
sass/style.scss:94 DEBUG: winter
sass/style.scss:102 DEBUG: black
sass/style.scss:102 DEBUG: blue
sass/style.scss:102 DEBUG: white
File style/style.css created.

Done, without errors.


Execution Time (2014-06-06 16:02:43 UTC)
loading tasks  639ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 41%
sass:dist      934ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 59%
Total 1.6s

```

#### Compile the scss file using the ```watch``` task

```
heb:hello-sass-grunt-scss$ grunt watch
Running "watch" task
Waiting...
>> File "sass/style.scss" changed.
Running "sass:dist" (sass) task
sass/style.scss:102 DEBUG: black
sass/style.scss:102 DEBUG: blue
sass/style.scss:102 DEBUG: white
File style/style.css created.

Done, without errors.


Execution Time (2014-06-06 16:04:29 UTC)
loading tasks  199ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 47%
sass:dist      222ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 53%
Total 422ms

Completed in 0.657s at Fri Jun 06 2014 11:04:29 GMT-0500 (CDT) - Waiting...
```

## Licensing
Copyright 2014 Lloyd Heberlie

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](license.txt) file.