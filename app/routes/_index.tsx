import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
	foo: {
		fontSize: "3rem",
	},
	bar: {
		backgroundColor: "yellow",
	},
});

export default function Index() {
	return (
		<div>
			<div {...stylex.props(styles.foo, styles.bar)}>Vite + Remix + StyleX</div>
		</div>
	);
}
