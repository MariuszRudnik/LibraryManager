# LibraryManager

LibraryManager to aplikacja do zarządzania biblioteką, stworzona w oparciu o frameworki React. Projekt wspiera zarządzanie użytkownikami, książkami, wypożyczeniami oraz logami systemowymi.

## Funkcjonalności

1. **Rejestracja użytkownika**
    - Możliwość rejestracji jako klient biblioteki (wprowadzenie imienia, nazwiska i adresu e-mail).
    - Generowanie unikalnego kodu karty bibliotecznej po rejestracji.

2. **Logowanie**
    - Logowanie za pomocą hasła i kodu karty bibliotecznej.
    - Informacje o zalogowanym użytkowniku w nagłówku aplikacji.

3. **Zarządzanie książkami**
    - Publiczna lista książek dostępnych do wypożyczenia (z tytułem, autorem i liczbą egzemplarzy).
    - Możliwość wypożyczenia książki na 14 dni (tylko przez zalogowanych użytkowników).
    - Administrator ma możliwość dodawania, edytowania oraz usuwania książek.

4. **Panel użytkownika**
    - Widok statystyk użytkownika, takich jak liczba wypożyczeń, zwrotów w terminie, oraz aktualne wypożyczenia.
    - Historia wypożyczeń z możliwością zwrotu książki.

5. **Panel administratora**
    - Zarządzanie listą wypożyczeń (widok kto wypożyczył, kiedy oraz status).
    - Wymuszanie zwrotu książki po terminie.
    - Widok logów systemowych, takich jak daty, użytkownicy i akcje w systemie.

6. **Testy i jakość kodu**
    - Testy jednostkowe i E2E pokrywające główne funkcjonalności aplikacji.
    - Linter oraz husky skonfigurowane w celu utrzymania jakości kodu.

## Technologie

- **Frontend**: React 
- **Backend**: json-serve
- **UI**: Material UI lub inna biblioteka stylów


