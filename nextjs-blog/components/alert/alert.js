import styles from "./alert.module.css";
import { clsx } from "clsx";

export default function Alert({ children, type }) {
    return (
        <div
            className={clsx({
                [styles.sucess]: type === "sucess",
                [styles.error]: type === "error"
            })}
        >
            {children}
        </div>
    )
}