import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <motion.div 
        className="container" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <Heading as="h1" className={styles.heroTitle}>
          🚀 Documentación de {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          Centralizamos la documentación técnica de los proyectos de nuestros clientes.
        </p>
        <motion.div 
          className={styles.buttons}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link className="button button--secondary button--lg" to="/docs/introduccion">
            📖 Ver Documentación
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`Documentación de ${siteConfig.title}`}
      description="Repositorio centralizado de documentación de proyectos de la agencia."
    >
      <HomepageHeader />
    </Layout>
  );
}
