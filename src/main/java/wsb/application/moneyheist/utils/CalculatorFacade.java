package wsb.application.moneyheist.utils;

import java.math.BigDecimal;

public class CalculatorFacade {

    private static final String INCOME_TYPE = "INCOME";
    private static final String EXPENSE_TYPE = "EXPENSE";

    public static BigDecimal calculateAmount(final BigDecimal budgetAmount,
                                             final BigDecimal transactionAmount,
                                             final String type,
                                             final boolean reverse) {
        switch (type) {
            case EXPENSE_TYPE:
                return ExpenseProcess.calculate(budgetAmount, transactionAmount, reverse);
            case INCOME_TYPE:
                return IncomeProcess.calculate(budgetAmount, transactionAmount,reverse);
        }
        return budgetAmount;
    }

}
