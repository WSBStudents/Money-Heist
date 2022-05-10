package wsb.application.moneyheist.service;

import wsb.application.moneyheist.dto.TransactionDto;

import java.util.List;

public interface TransactionService {
    List<TransactionDto> getAllTransaction(Long accountId);

    void updateTransaction(TransactionDto transactionDto);

    void deleteTransaction(Long id);
}
