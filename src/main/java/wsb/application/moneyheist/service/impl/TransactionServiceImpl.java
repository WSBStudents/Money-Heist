package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.jpa.model.Transaction;
import wsb.application.moneyheist.jpa.repository.TransactionRepository;
import wsb.application.moneyheist.service.TransactionService;

import java.util.List;

@Data
@AllArgsConstructor
@Service
public class TransactionServiceImpl implements TransactionService {

    private TransactionRepository transactionRepository;
    private MapperFacade mapper;

    @Override
    public List<TransactionDto> getAllTransaction(final Long accountId) {
        return mapper.mapAsList(transactionRepository.findAllByAccountId(accountId), TransactionDto.class);
    }

    @Override
    public void updateTransaction(final TransactionDto transactionDto) {
        transactionRepository.save(mapper.map(transactionDto, Transaction.class));
    }

    @Override
    public void deleteTransaction(final Long id) {
        transactionRepository.deleteById(id);
    }

}

