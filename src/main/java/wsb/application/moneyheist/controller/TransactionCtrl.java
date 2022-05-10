package wsb.application.moneyheist.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.service.TransactionService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/transaction")
public class TransactionCtrl {

    private TransactionService transactionService;

    @GetMapping("/all/{accountId}")
    public List<TransactionDto> getAllTransactionForAccount(@PathVariable final Long accountId) {
        return transactionService.getAllTransaction(accountId);
    }

    @PostMapping("/add")
    public void addTransaction(@RequestBody final TransactionDto transactionDto) {
        transactionService.updateTransaction(transactionDto);
    }

    @DeleteMapping("/delete")
    public void deleteAccount(@RequestParam final Long id) {
        transactionService.deleteTransaction(id);
    }
}
