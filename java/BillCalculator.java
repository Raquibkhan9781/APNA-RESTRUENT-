import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Java version of the restaurant bill calculation.
 * Run with:
 *   javac BillCalculator.java
 *   java BillCalculator
 */
public class BillCalculator {
    private static final double TAX_RATE = 0.05;

    public static void main(String[] args) {
        Map<String, Double> price = new LinkedHashMap<>();
        price.put("Pasta", 120.0);
        price.put("Pizza", 199.0);
        price.put("Momos", 100.0);
        price.put("Chowmein", 110.0);
        price.put("Chaat", 70.0);
        price.put("Coffee", 60.0);
        price.put("Tea", 30.0);

        Map<String, Integer> order = new LinkedHashMap<>();
        order.put("Pasta", 2);
        order.put("Momos", 1);
        order.put("Coffee", 1);

        double subtotal = 0;
        System.out.println("===== APNA RESTAURANT =====");
        System.out.println("GOOD FOOD • GOOD DAY");
        System.out.println("GOOD MOOD • GREAT MOMENTS");
        System.out.println();

        for (Map.Entry<String, Integer> entry : order.entrySet()) {
            String item = entry.getKey();
            int qty = entry.getValue();
            double lineTotal = price.get(item) * qty;
            subtotal += lineTotal;
            System.out.printf("%-12s x%d  ₹%.2f%n", item, qty, lineTotal);
        }

        double tax = subtotal * TAX_RATE;
        double total = subtotal + tax;
        System.out.println("----------------------------");
        System.out.printf("Subtotal       ₹%.2f%n", subtotal);
        System.out.printf("GST / Tax 5%%   ₹%.2f%n", tax);
        System.out.printf("Grand Total     ₹%.2f%n", total);
        System.out.println("============================");
    }
}
