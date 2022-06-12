Aplikacja MoneyHeist została stworzona do kontrolowania budżetów. W aplikacji możemy dodać budżet, a do każdego budżetu może zostać przypisana transakcja, która jest zyskiem lub wydatkiem dla danego budżetu. Automatycznie jest zliczana suma wszystkich transakcji dla budżetu, oraz globalna suma środków dla użytkownika. Każdy użytkownik może się zarejestrować i zalogować do platformy gdzie będzie posiadał swoje budżety. Aplikacja została stworzona w technologi React-Spring

## Wzorce projektowe

- Informatyka, Programowanie
- Rok III Semestr VI

## Authors

- Sebastian Rogowski 11303
- Bartłomiej Obudziński 10246

#Aplikacja jest dostępna pod adresem:
https://gentle-stone-04b6c3503.1.azurestaticapps.net/

# Wzorce projektowe

## Wzorzec Singleton

**Opis wzorca**

Wzorzec Singleton klasyfikuje się do wzorców kreacyjnych. Zapewnia on istnienie jednej instancji klasy.
Pozwala na użycie go w dowolnym miejscu aplikacji chroniąc go przed działaniem innego kodu.

![singleton](https://github.com/WSBStudents/Money-Heist/blob/main/design_patterns/singleton_structure.png?raw=true)

**Użycie w projekcie**

Klasy serwisowe oraz utilsowe według dobrych zasad zawsze muszą posiadać jedną instancję.

Z pomocą Spring każda klasa, która jest oznaczona adnotacją np. @Component, @Service są z defaultu singletonem.

Czyli klasy np. klasy: UserDetailsServiceImpl, BudgetServiceImpl, ManagerServiceImpl, TransactionServiceImpl,
AuthEntryPointJwt, JwtUtils.

![singleton_own](https://github.com/WSBStudents/Money-Heist/blob/main/design_patterns/singleton.png?raw=true)

## Wzorzec Fasada

**Opis wzorca**

Wzorzec Fasada klasyfikuje się do wzorców strukturalnych. Charakteryzuje się tym, że biblioteka lub framework zostaje wyposażony w uproszczony interfejs. Stworzenie fasady jest wygodnym sposobem integracji aplikacji z biblioteką posiadającą wiele funkcji, gdy potrzebujesz tylko niektórych z nich.

![facade](https://github.com/WSBStudents/Money-Heist/blob/main/design_patterns/facade_structure.png?raw=true)

**Użycie w projekcie**

Klasa CalculatorFacade jest to klasa, która na podstawie danych wejściowych(w tym przypadku wartości z type) decyduje którego algorytmu użyć.

Logika biznesowa calculate różni się w zależności od operacji (zysk / wydatek), dlatego została zastosowana fasada,
która odpowiednio wywoła ExpenseProcess lub IncomeProcess.

![facade_own](https://github.com/WSBStudents/Money-Heist/blob/main/design_patterns/facade.png?raw=true)

## Wzorzec Builder

**Opis wzorca**

Wzorzec Builder klasyfikuje się do wzorców kreacyjnych. Pozwala tworzyć złożone obiekty sukcesywnie krok po kroku. Z użyciem tego wzorca można utworzyć różne typy i reprezentacje obiektu używając tego samego kodu konstrukcyjnego

![builder](https://github.com/WSBStudents/Money-Heist/blob/main/design_patterns/builder_structure.png?raw=true)

**Użycie w projekcie**

Początkowo dany wzorzec był wykorzystywany do czytelniejszego budowania obiektów przy mapowaniu dto
na model entity.

Później podjeliśmy decyzję podmienić mapowanie na bibliotekę Orika, która też używa wzorca builder.
Dodatkowo też używając "pod spodem" wzorca factory.
Konfigurując sposób mapowania klasy A na klasę B, zostaję zarejestrowana klasa mapująca do MapperFactory.

Później wystarczy wywołać mapper.map([obiekt wejściowy], [Klasa oczekiwana].class)

Biblioteka zapewni nam odpowiedni obiekt na wyjściu. Podsumując przeplata się tu dwa wzorca factory oraz strategy.
Klasa konfiguracyjna orika - OrikaConfig.

## Wzorzec MVC

**Opis wzora**

Wzorzec MVC jest jednym z najstarszych wzroców architekrualnych w tworzeniu aplikacji internetwoych. W rozszerzeniu oznacza Model-View-Controller. Jest używany w celu odzielenia logiki od innych warst programu.

![mvc](https://github.com/WSBStudents/Money-Heist/blob/main/design_patterns/mvc_structure.png?raw=true)

**Użycie w projekcie**
Większość aplikacji webowych używa wzorca MVC.

W naszym przypadku jako controller jest traktowana każda klasa z adnotacją
@Controller czyli: BudgetCtrl, TransactionCtrl, AuthController, TestCtrl.

Modelem są klasy odwzorujące tabele w bazie danych czyli: User, Role, Agreement, Budget.
Także przejściowo są klasy: BudgetDto, TransactionDto, UserDto

Jako View w naszym przypadku jest odpowiedzialna warstwa frontendowa po stronie frontu, która odpowiednio np. wyświetla przekazane przez controller dane.

##Wstrzykiwanie zależności (ang. Dependency Injection)
Warto wspomnieć, że większość klas używa wzorca wstrzykiwania zależności.
Jest to wzorzec projektowy i wzorzec architektury oprogramowania polegający na usuwaniu bezpośrednich zależności pomiędzy komponentami na rzecz architektury typu plug-in.

Polega na przekazywaniu gotowych, utworzonych instancji obiektów udostępniających swoje metody i właściwości obiektom, które z nich korzystają (np. jako parametry konstruktora, settery). Stanowi alternatywę do podejścia, gdzie obiekty tworzą instancję obiektów, z których korzystają np. we własnym konstruktorze.
Za to odpowiada gwne załóżenie Spring Frameworku.

![mvc_own](https://github.com/WSBStudents/Money-Heist/blob/main/design_patterns/mvc.png?raw=true)
