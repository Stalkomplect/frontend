import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "@/pages/home";
import { CatalogPage } from "@/pages/catalog";
import { ContactsPage } from "@/pages/contacts";
import { ShoppingCartPage } from "@/pages/shopping-cart";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: (
			<section
				style={{
					width: "100%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1 style={{ fontSize: "1.7rem", textAlign: "center" }}>Страницы не существует!</h1>
				<a href='/'>На главную</a>
			</section>
		),
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/catalog",
				element: <CatalogPage />,
			},
			{
				path: "/catalog/:url",
				element: <CatalogPage />,
			},
			{
				path: "/contacts",
				element: <ContactsPage />,
			},
			{
				path: "/shopping-cart",
				element: <ShoppingCartPage />,
			},
		],
	},
]);
