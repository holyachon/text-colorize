# Text-colorizing
Text에 Color를 적용하는 Figma Plugin 입니다.

## Build
```
npm run build
```

## How to Use
1. Repo를 Clone 하거나 파일들을 다운받습니다.
2. Figma 상단 메뉴 중 `Plugins - Manage Plugins`
3. `In development - Create New Plugin +`
4. `Link existing plugin` 하단 박스 클릭해서 `manifest.json` 선택
5. 원하는 텍스트 블록 선택 후 Figma 상단 메뉴 중 `Plugins - Development - text-colorize - Colorize Text`


## Change Color
[code.ts](code.ts) 파일 상단의 ConstDefaultColorCode 값을 변경한 후, 다시 빌드합니다.