#!/bin/bash

# 디렉토리 및 파일 경로 설정
assetsDir="dist/assets"
outputDir="dist/src/theme"
files=($assetsDir/*)

# 파일을 각각의 prefix에 따라 폴더로 이동
for file in "${files[@]}"; do
  filename=$(basename "$file")
  IFS='_' read -r -a parts <<< "$filename"
  prefix="${parts[0]}"
  folderPath="$outputDir/$prefix"

  if [ -d "$folderPath" ]; then
    # 파일 복사
    cp "$file" "$folderPath"
    echo "Copy $filename to $prefix/$filename"
  fi
done

echo "Organizing assets complete."