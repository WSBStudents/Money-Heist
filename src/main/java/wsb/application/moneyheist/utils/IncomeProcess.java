package wsb.application.moneyheist.utils;

import java.math.BigDecimal;

public class IncomeProcess {

    public static BigDecimal calculate(final BigDecimal budgetAmount,
                                       final BigDecimal transactionAmount,
                                       final boolean reverse) {
        if (reverse) {
            return budgetAmount.subtract(transactionAmount);
        } else {
            return budgetAmount.add(transactionAmount);
        }
    }

}
