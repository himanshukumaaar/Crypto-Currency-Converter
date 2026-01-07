import tkinter as tk
from tkinter import ttk
import ccxt

class CryptoConverter:
    def __init__(self, root):
        self.root = root
        self.root.title("Crypto Currency Converter")

        # Set background gradient
        self.background_label = tk.Label(root, bg="#45aaf2", height=10)
        self.background_label.grid(row=0, column=0, columnspan=3, sticky="nsew")

        # Header label
        self.header_label = ttk.Label(root, text="Crypto Currency Converter", font=("Helvetica", 16, "bold"), foreground="white", background="#45aaf2")
        self.header_label.grid(row=0, column=1, pady=(20, 10))

        # Amount Entry
        self.amount_label = ttk.Label(root, text="Amount:", font=("Helvetica", 12), foreground="white", background="#45aaf2")
        self.amount_label.grid(row=1, column=0, padx=10, pady=10, sticky="w")

        self.amount_entry = ttk.Entry(root, font=("Helvetica", 12))
        self.amount_entry.grid(row=1, column=1, padx=10, pady=10)

        # From Currency
        self.from_currency_label = ttk.Label(root, text="From Currency:", font=("Helvetica", 12), foreground="white", background="#45aaf2")
        self.from_currency_label.grid(row=2, column=0, padx=10, pady=10, sticky="w")

        self.from_currency_combobox = ttk.Combobox(root, values=self.get_currencies(), font=("Helvetica", 12))
        self.from_currency_combobox.grid(row=2, column=1, padx=10, pady=10)
        self.from_currency_combobox.set("BTC")

        # To Currency
        self.to_currency_label = ttk.Label(root, text="To Currency:", font=("Helvetica", 12), foreground="white", background="#45aaf2")
        self.to_currency_label.grid(row=3, column=0, padx=10, pady=10, sticky="w")

        self.to_currency_combobox = ttk.Combobox(root, values=self.get_currencies(), font=("Helvetica", 12))
        self.to_currency_combobox.grid(row=3, column=1, padx=10, pady=10)
        self.to_currency_combobox.set("USD")

        # Convert Button
        self.convert_button = ttk.Button(root, text="Convert", command=self.convert_currency, style="TButton")
        self.convert_button.grid(row=4, column=0, columnspan=2, pady=20)

        # Result Label
        self.result_label = ttk.Label(root, text="", font=("Helvetica", 14), foreground="#45aaf2", background="white")
        self.result_label.grid(row=5, column=0, columnspan=3, pady=20)

        # Style for the Convert Button
        self.style = ttk.Style()
        self.style.configure("TButton", font=("Helvetica", 14), background="#45aaf2", foreground="olive", borderwidth=0)

        # Hover effect for the Convert Button
        self.style.map("TButton", background=[("active", "#218c74")])

    def get_currencies(self):
        exchange = ccxt.binance()
        symbols = exchange.load_markets()
        return list(symbols.keys())

    def convert_currency(self):
        try:
            amount = float(self.amount_entry.get())
            from_currency = self.from_currency_combobox.get()
            to_currency = self.to_currency_combobox.get()

            exchange = ccxt.binance()
            ticker = exchange.fetch_ticker(f"{from_currency}/{to_currency}")
            conversion_rate = ticker["ask"]

            result = amount * conversion_rate
            self.result_label.config(text=f"Result: {amount} {from_currency} = {result:.4f} {to_currency}")

        except Exception as e:
            self.result_label.config(text=f"Error: {e}")

if __name__ == "__main__":
    root = tk.Tk()
    root.geometry("400x500")
    app = CryptoConverter(root)
    root.mainloop()
