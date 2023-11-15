import { title, subtitle } from "../components/primitives";
import DefaultLayout from "../layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Wacamole&nbsp;</h1>
					<h1 className={title({ color: "gold" })}>Website&nbsp;</h1>
					<br />
					<h4 className={subtitle({ class: "mt-4" })}>
						Idk what to put here so we change money for silver (metal) stuff.
					</h4>
				</div>

			</section>
		</DefaultLayout>
	);
}
