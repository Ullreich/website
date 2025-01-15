# A Mathematical Approach to Metawords

[Autological (Homological words)](https://en.wikipedia.org/wiki/Autological_word) describe words that describe themselves e.g. short is a short word, English is an Englisch word, and writeable is a writeable word. This stands in contrast to heterological words, i.e., words that do not describe themselves e.g. long is not a long word, monosyllabic is not monosyllabic, and unpronouncable is (debatably, unless you have a speach impediment or English is not your first language) not unpronouncable.

Altogether, we note each word describes a set of words. Note that this set may also be the empty set, say e.g. apple.

I propose a new set of words: _biautological words_! A biautological word _A_ is a word which describes a word _B_ which describe the word _A_. An example would be the tuple [calque](https://en.wikipedia.org/wiki/Calque) and [loanword](https://en.wikipedia.org/wiki/Loanword). A calque is "A word or phrase in a language formed by word-for-word or morpheme-by-morpheme translation of a word in another language."¹<br>
A loanword is "A word directly taken into one language from another one."²<br>
So, a calque is a loanword, which in turn is a calque, it being a loanword, which conversely is a calque, which is a loanword, it posessing the quality of being a calque, which in its nature is a loanword ...

This whole concept can be generalized to what I propose be called _n-th degree autological words_. An autological word _C_ of n-th degree is a word that takes at least n intermediate words that each describe their successor word until finally describing _C_ again. As a convention, we can say that words that describe the empty set of words are of degree $-\infty$. So regular autological words are autological words of 0th degree, biautological words are of 1st degree and so on. An example for a 2nd degree autological word would be the word long: long describes autological describes short describes long, or, with a more helpful visual notation: long -> autological -> short -> long.

This leaves the problem of classifying words into their degreeedness. 0-th degree autological words are easily proven to be of that degree, since we can't bring their degree down any further. Biautological words are also easily proven to be biautological: since a biautological word is not autological, it needs at least one degree of separation. Any word _D_ of higher degree is harder to prove to be of a certain degree, since we need to individually inspect all the words _D_ describes and all the words described by those words and so on to find a minimal path (if we had all those sets, however, we could easily find the degree of a word through e.g. Dikstra's algorithm).

--------------------
1. https://en.wiktionary.org/wiki/calque
2. https://en.wiktionary.org/wiki/loanword
