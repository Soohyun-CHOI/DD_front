import styles from "../../styles/Menu.module.scss";
import Link from "next/link";

interface MenuProps {
  menuInfo: { chapter: string; name: string; plus?: boolean };
  submenu?: Array<{ chapter: string; number: number; name: string }>;
}

const Menu: React.FC<MenuProps> = ({ menuInfo, submenu }) => {
  return (
    <>
      {menuInfo.plus ? (
        <Link href="/">
          <a className={styles.main_menuWrap}>
            <div className={styles.plus_menu}>
              {menuInfo.chapter}. {menuInfo.name}
            </div>
          </a>
        </Link>
      ) : menuInfo.chapter === "00" ? (
        <Link href="/overview">
          <a className={styles.main_menuWrap}>
            <div className={styles.main_menu}>
              {menuInfo.chapter}. {menuInfo.name}
            </div>
          </a>
        </Link>
      ) : (
        <Link href={`/lol/${menuInfo.chapter}`}>
          <a className={styles.main_menuWrap}>
            <div className={styles.main_menu}>
              {menuInfo.chapter}. {menuInfo.name}
            </div>
          </a>
        </Link>
      )}
      {submenu &&
        submenu.map((item) => {
          return (
            <Link
              href={`/lol/${item.chapter}/0${item.number}`}
              key={item.number}
            >
              <a className={styles.sub_menuWrap}>
                <div className={styles.sub_menu}>
                  {item.chapter}-{item.number}. {item.name}
                </div>
              </a>
            </Link>
          );
        })}
    </>
  );
};

export default Menu;
