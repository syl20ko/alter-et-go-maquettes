# Maquettes de page d'accueil, refonte alteretgo.org sur Symfony

Trois maquettes HTML autonomes, créées le 14 octobre 2026, pour proposer à Cédric Marteau la refonte du site Joomla 3 (obsolète, attaqué à répétition) sur Symfony.

(c) Sylvain Caron 2026. Proposition non contractuelle. Reproduction et réutilisation interdites sans accord écrit. Textes et photos : ALTER ET GO !

## Ouvrir

- `index.html` : page de choix avec les trois aperçus.
- `maquette-1-horizon.html` : fidèle au site actuel, hero photo, carte « À la une » sur le visuel.
- `maquette-2-cerf-volant.html` : chaleureuse, collage de photos, bandeau d'actualité sombre, fil du cerf-volant.
- `maquette-3-carnet.html` : éditoriale, « une » de journal, rubriques numérotées, tableau des saisons, boutons A+ et Contraste.

Paramètres d'adresse : `?nopop=1` ouvre sans la fenêtre d'actualité, `&static=1` affiche toutes les sections sans animation (captures).

## Décisions prises avec Sylvain (wizard du 14/10)

- Palette : turquoise `#1cbbb4` et corail `#fd6a54` du site actuel, partout. Le bleu et le jaune restent dans le logo seulement.
- Actualités : bloc « À la une » toujours visible sous le hero, plus une fenêtre pilotable depuis l'admin (activée / désactivée, dates de début et de fin, bouton « Actualités » dans le menu pour la rouvrir).
- Nom : « ALTER ET GO ! » sans statut (le site dit « Association » mais annonce le passage en SCOP au 01/01/2026).
- Base de données non lue (mot de passe SSH refusé le 14/10, autre session en cours sur la sécurité). Contenu pris sur le site en ligne.

## Contenu mis en avant, lu sur le site

- Séjours adaptés pour adultes en situation de handicap mental, toute l'année, 10 villes de départ sans surcoût, plus de 800 vacanciers à l'été 2026.
- Saison en cours : Noël 2026 (19/12/26 au 02/01/27), programme et places disponibles en PDF, dossier d'inscription.
- Recrutement permanent d'animateurs (Perpignan, Montpellier, Toulouse), gros enjeu de l'association.
- Deux gîtes : Village de Gîtes à Marquixanes (site séparé gite-groupe-canigou.org) et Villa ALTER ET GO ! à Rivesaltes (nouveauté 2026).
- Partenaires : établissements médico-sociaux, collectivités, fondations.

## Fichiers

- `assets/img/` : logo et photos du site, redimensionnées à 1800 px max.
- `assets/logos-partenaires/` : logos tels quels (gif et jpg d'origine, petits).
- `assets/commun.js` : fenêtre d'actualité, apparition au défilement, menu mobile.
- `apercus/` : captures des trois maquettes pour l'index.

## Contrôles faits

- Responsive vérifié par captures Playwright à 375, 768 et 1440 px.
- Revue Refactoring UI : contrastes corrigés (texte sombre sur turquoise et corail, badges corail clair / corail foncé).
- Aucun tiret long dans les fichiers.
