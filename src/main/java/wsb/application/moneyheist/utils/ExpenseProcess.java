package wsb.application.moneyheist.utils;

import java.math.BigDecimal;

public class ExpenseProcess {

    public static BigDecimal calculate(final BigDecimal budgetAmount,
                                       final BigDecimal transactionAmount,
                                       final boolean reverse) {
        if (reverse) {
            return budgetAmount.add(transactionAmount);
        } else {
            return budgetAmount.subtract(transactionAmount);
        }
    }

}
