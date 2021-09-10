# Site Congres A21

Ce site a été réalisé pour le congrès industriel de l'automne 2021. Il est réalisé en javascript afin de faciliter la continuité.

## Pages réalisées à ce jour :

- Page d'accueil du site (En cours)
- Page entreprise (En cours)
- Page à propos (En cours)
- Menu (Plutôt fini)

## Bibliothèques

Pour notre projet, nous utilisons différentes bibliothèques CSS et JavaScript.
- **jQuery** Bibliothèque simplifiant grandement l'apprentissage du JavaScript. Elle dispose notamment de fonction permettant de réaliser des fondues ou des slides. C'est un outil indispensable.
- **AOS** (*Animation On Scroll*) Comme son nom l'indique, cette bibliothèque JS et CSS permet de réaliser des animations quand on scrolle sur une page : [la doc](https://michalsnik.github.io/aos/) [le github (un peu plus détaillé)](https://github.com/michalsnik/aos)
- **Slick** Bibliothèque permettant d'obtenir des carousels. :warning: Cette bibliothèque exige de ne pas utiliser un container flex. Cela s'avère assez embêtant dans notre cas. [le site de la biblio (avec le lien du github)](http://kenwheeler.github.io/slick/).

## Insérer une entreprise dasn la page entreprises

Notre site est réalisé uniquement en frontend, il n'est donc pas possible d'y introduire une base de données. Cependant, cela s'avère relativement nécessaire lorsque nous voulons introduire des entreprises qui changent d'année en année. Nous avons donc réalisé un système de pseudo-base de données.
Ce système permet même à un néophyte de pouvoir changer les bases de donnée à l'aide de ce tutoriel :

1. Commencer par créer un fichier `<nom_entreprise_en_minuscule>.json` dans le répertoire `json`.
2. Placer le logo de l'entreprise (au format png si possible) dans le répertoire `images`.
3. Insérer la description de l'entreprise (`<description>.txt`) dans le répertoire `presentation_entreprises`.
4. Remplissez le fichier json à l'aide du template suivant :
```json
[{
    "name":"<nom_entreprise>",
    "logo":"<nom_fichier_logo>",
    "content":"<nom_fichier_description>"
}]
```
5. Ajouter le template dans le fichier `entreprises_participantes.js`.
```js
    /* Aux lignes indiquées, remplir comme ceci */
    createTemplate("<nom_entreprise_comme_ecrit_sur_le_fichier_json>","container<numero_du_container>");
```
En suivant ces étapes vous pourrez ajouter toutes les entreprises sur le site.

> :warning: Pour la description au froamt txt, il faudra ajouter des balises html pour faire de la mise ne forme ( saut à la ligne avec `<br>`, liste avec `<ul>`  et `<li>`,etc.).

## Sources :

- Super site pour comprendre plus en détail le fonctionnement des flex-box : [Flex-boxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Cours Openclassrooms

Le site OpenClassroom propose de nombreux tutoriels pour apprendre des langages de programmation, pour le web entre autre. Voici une liste non exhaustive de cours sympathiques :
- **JavaScript** pour les débutants ( assez rpaide, utile pour connaître les syntaxes de base) : [JavaScript](https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript)
- **JavaScript appliqué au web (DOM)** Tutoriel vraiment cool pour apprendre la DOM : [DOM](https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web)
- **JQuery** Tutoriel pour faire des dingueries graphiques avec JQuery, ça peut s'avérer méga utile : [JQuery](https://openclassrooms.com/fr/courses/3504441-introduction-a-jquery)
- 

### Extensions de navigateur

On utilise certaines extensions de navigateur pour nous aider :
- **Viewport Resizer** Pour tester si on a fait du bon boulot au niveau de la "*responsivité*" du site : [Viewport Resizer](https://chrome.google.com/webstore/detail/viewport-resizer-%E2%80%93-respon/kapnjjcfcncngkadhpmijlkblpibdcgm)

### Extensions VSCode

On utilise l'environnement VSCode pour coder parce qu'il dispose de nombreuses extensions utiles :
- **Elm Emmet** Pour générer du code html de manière hyper rapide (c'est vraiment le feu) : [Elm Emmet](https://marketplace.visualstudio.com/items?itemName=necinc.elmmet)
- **Live Server** Pour héberger localement notre site et pour pouvoir directement afficher les modifs sans avoir besoin de modifier, c'est également utile pour tester les features sur un téléphone : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)