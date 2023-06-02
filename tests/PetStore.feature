Scenario: Breaker joins a game
    Given the Maker has started a game with the word "silky"
    When the Breaker joins the Maker's game
    Then the Breaker must guess a word with 5 characters

Scenario: PetStore HomePage Related 
    Given user visits homepage
    When Logo Position is observed
    Then position should be top left