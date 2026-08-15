'''
This script allows you to download pieces and boards from chess.com
One by one
'''

import re
import urllib.request
import os

#First rule of regex: don't write regex (better go on Stackoverflow to save time and minds)

regex = r"https?://[^\s<>\"');()]+"

#string from chessDOTcom id="board-styles-vs-personalities"
test_str = ("@-moz-document domain(\"lichess.org\")\n"
	"{\n\n"
	"  piece.pawn.black\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/5ZaWUWx.gif\")!important;\n"
	"  }\n\n"
	"  piece.knight.black\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/W70cfgi.gif\")!important;\n"
	"  }\n\n"
	"  piece.bishop.black\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/2SmLrxd.gif\")!important;\n"
	"  }\n\n"
	"  piece.rook.black\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/3gR95IV.gif\")!important;\n"
	"  }\n\n"
	"  piece.queen.black\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/P7oIMSC.gif\")!important;\n"
	"  }\n\n"
	"  piece.king.black\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/xtwH2Nw.gif\")!important;\n"
	"  }\n\n"
	"  piece.pawn.white\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/XR4Jp97.gif\")!important;\n"
	"  }\n\n"
	"  piece.knight.white\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/0jM2L5m.gif\")!important;\n"
	"  }\n\n"
	"  piece.bishop.white\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/N0Px5q3.gif\")!important;\n"
	"  }\n\n"
	"  piece.rook.white\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/5R52aYr.gif\")!important;\n"
	"  }\n\n"
	"  piece.queen.white\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/lfTmu61.gif\")!important;\n"
	"  }\n\n"
	"  piece.king.white\n"
	"  {\n"
	"    background-image: url(\"https://i.imgur.com/3T6H9xC.gif\")!important;\n"
	"  }")

matches = re.finditer(regex, test_str, re.MULTILINE)

name_style = 'random'

os.mkdir(name_style)

for matchNum, match in enumerate(matches, start=1):
    
    print ("Match {matchNum} was found at {start}-{end}: {match}".format(matchNum = matchNum, start = match.start(), end = match.end(), match = match.group()))
    
    for groupNum in range(0, len(match.groups())):
        groupNum = groupNum + 1
        
        print ("Group {groupNum} found at {start}-{end}: {group}".format(groupNum = groupNum, start = match.start(groupNum), end = match.end(groupNum), group = match.group(groupNum)))
    
    #if (matchNum > 1):
    txt = match.group()
    x = re.split("[^\(https://i.imgur.com/)](.*)\.gif", txt)
    #urllib.request.urlretrieve(match.group(), nom_piece + "/" + x[3])
    urllib.request.urlretrieve(match.group(), name_style + "/" + x[1] + '.gif')