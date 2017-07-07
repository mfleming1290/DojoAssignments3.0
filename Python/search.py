import re
words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress",
  "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
matches = []
for word in words:
    if re.search(r'v',word):
        matches.append(word)
    elif re.search(r's+s',word):
        matches.append(word)
    elif re.search(r'e$',word):
        matches.append(word)
    # elif re.search(r'',word):
    #     matches.append(word)
print matches
