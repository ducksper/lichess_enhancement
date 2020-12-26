import re
import urllib.request
import os

#First rule of regex: don't write regex (better go on Stackoverflow to save time and minds)

regex = r"https?://[^\s<>\"');()]+"

#string from tchés.koum id="board-styles-vs-personalities"
test_str = ""

matches = re.finditer(regex, test_str, re.MULTILINE)

name_style = ''

os.mkdir(nom_piece)

for matchNum, match in enumerate(matches, start=1):
    
    print ("Match {matchNum} was found at {start}-{end}: {match}".format(matchNum = matchNum, start = match.start(), end = match.end(), match = match.group()))
    
    for groupNum in range(0, len(match.groups())):
        groupNum = groupNum + 1
        
        print ("Group {groupNum} found at {start}-{end}: {group}".format(groupNum = groupNum, start = match.start(groupNum), end = match.end(groupNum), group = match.group(groupNum)))
    
    if (matchNum > 1):
        txt = match.group()
        x = re.split("^(https:\/\/images\.chesscomfiles\.com\/chess-themes\/pieces\/(.)*\/150\/)", txt)
        urllib.request.urlretrieve(match.group(), nom_piece + "/" + x[3])