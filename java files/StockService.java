@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    public Stock saveStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }
}