Debatepedia
===========

우리 사회의 중요한 논쟁거리들을 정리하여 보여주고, 함께 토론하여 만들어 나가는 곳

## Installation in Development

```
git clone ...
cd ...
bundle install --without production
npm install -g gulp-cli
npm install
gulp      # for react in new tab
guard           # for auto test in new tab
```

## Run in Development

```
rake db:migrate
rails s
```

## After develop

```
npm install # if package.json updated
gulp
```
