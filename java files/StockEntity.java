@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String ticker;
    private Integer quantity;
    private Double buyPrice;

    // Getters and Setters
}