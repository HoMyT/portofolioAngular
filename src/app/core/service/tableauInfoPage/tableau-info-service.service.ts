    import { Injectable } from '@angular/core';

    @Injectable({
    providedIn: 'root'
    })
    export class TableauInfoServiceService {

    constructor() { }

    servicePageHome: Array<unknown> = [
    {
        icone: "flaticon-big-data",
        title: "Développement d'applications web",
        describe : "Nous créons des applications web performantes en utilisant Angular, Node.js et TypeScript, ainsi qu'une base de données MongoDB ou MySQL pour stocker et récupérer les données"
    },
    {
        icone: "flaticon-data-analytics",
        title: "Développement d'API REST",
        describe : "Nous pouvons concevoir et développer des API RESTful en utilisant Node.js et MongoDB ou MySQL pour vous aider à construire une application qui s'appuie sur une API"
    },
    {
        icone: "flaticon-document",
        title: "Administration de base de données",
        describe : "Nous pouvons gérer et optimiser votre base de données relationnelle telle que MySQL ou MongoDB pour vous aider à atteindre vos objectifs commerciaux."
    },
    {
        icone: "flaticon-chart",
        title: "Développement de scripts de migration de données",
        describe : "Nous pouvons créer des scripts de migration de données pour faciliter le transfert de données d'une base de données à une autre."
    },
    {
        icone: "flaticon-science",
        title: "Formation et mentorat",
        describe : "Nous pouvons vous aider à acquérir des compétences en utilisant MongoDB, MySQL, CLI ou phpMyAdmin, ainsi que d'autres technologies web pour vous permettre de réaliser vos projets."
    },
    {
        icone: "flaticon-data-management",
        title: "Consultation technique",
        describe : "Nous pouvons vous fournir des conseils techniques pour vous aider à comprendre les technologies web modernes et à prendre des décisions éclairées pour votre projet de développement web."
    }
        ];

    tableauServicePageHome: Array<unknown> = [
        { title: "Création d'applications web" },
        { title: "Création d'API" },
        { title: "Intégration de fonctionnalités" },
        { title: "bases de données(Sql, NoSql)" },
        { title: "Sécurité des requêtes HTTP" },
        { title: "Mise à jour des applications" }
    ];

    tableauDescriptifPageDetail: Array<unknown> = [
        {
            title : "Création d'applications web",
            describe : "Il existe plusieurs raisons pour lesquelles vous devriez opter pour une application web plutôt qu'un site web. L'un des principaux avantages d'une application web est qu'elle peut être utilisée sur plusieurs plateformes, notamment les ordinateurs de bureau, les tablettes et les smartphones. Contrairement à un site web, une application web est conçue pour être réactive et adaptée à toutes les tailles d'écran, offrant ainsi une expérience utilisateur cohérente et conviviale sur tous les appareils. Un autre avantage majeur d'une application web est qu'elle peut être mise à jour plus facilement et rapidement qu'un site web traditionnel. Les changements apportés à l'application peuvent être immédiatement visibles pour tous les utilisateurs, tandis que les mises à jour d'un site web peuvent prendre plus de temps à être déployées. Enfin, en optant pour une application web, vous pouvez utiliser la même base de données pour alimenter une application mobile ou iOS. Cela signifie que les données de l'application web peuvent être facilement synchronisées avec une application mobile, offrant ainsi une expérience utilisateur transparente et cohérente sur toutes les plateformes. En somme, en choisissant une application web plutôt qu'un site web, vous bénéficiez d'une expérience utilisateur plus cohérente et conviviale, d'une mise à jour plus facile et rapide de votre application, ainsi que de la possibilité de synchroniser vos données avec une application mobile ou iOS.",
            image : "assets/img/typescript.svg",
            left: false
        },
        {
            title: "Création d'API",
            describe: "Opter pour une API REST Node.js peut être un choix judicieux pour plusieurs raisons, y compris la gestion efficace des ressources, la flexibilité, la sécurité et la communauté active de développeurs. Tout d'abord, Node.js est conçu pour être efficace dans la gestion des ressources, ce qui signifie que vous pouvez gérer de grandes quantités de trafic avec moins de ressources matérielles. Cela peut vous permettre de réduire les coûts de matériel et d'hébergement de votre API REST. Ensuite, Node.js est connu pour sa flexibilité, car il permet de gérer des applications complexes avec des fonctionnalités avancées. Vous pouvez facilement étendre Node.js en utilisant des modules tiers pour ajouter des fonctionnalités supplémentaires à votre API REST. En ce qui concerne la sécurité, Node.js dispose d'une communauté active de développeurs qui travaillent constamment à l'amélioration de la sécurité de la plateforme. De plus, il existe de nombreux modules de sécurité pour Node.js, qui peuvent être facilement ajoutés à votre API REST pour renforcer la sécurité de votre application. Enfin, Node.js est en constante évolution, avec de nouvelles versions et des fonctionnalités ajoutées régulièrement. Cela signifie que vous pouvez être sûr que votre API REST Node.js restera à jour et recevra des mises à jour régulières pour maintenir sa sécurité et ses performances. En somme, choisir une API REST Node.js peut offrir des avantages significatifs en termes de gestion efficace des ressources, de flexibilité, de sécurité et de mises à jour régulières. Si vous cherchez une solution évolutive, sécurisée et facile à gérer pour votre projet, une API REST Node.js est un excellent choix.",
            image: "assets/img/1200px-Node.js_logo.svg.png",
            left: true
        },
        {
            title: "Intégration de fonctionnalités",
            describe : "L'intégration de fonctionnalités dans une application web est un processus qui consiste à ajouter de nouvelles fonctionnalités ou à améliorer les fonctionnalités existantes de votre site web ou de votre application. Cela peut inclure l'ajout de nouvelles fonctionnalités telles que la connexion avec les réseaux sociaux, l'intégration de vidéos ou l'ajout de boutons pour partager le contenu de votre site web. L'objectif de l'intégration de fonctionnalités est d'améliorer l'expérience utilisateur et d'offrir des fonctionnalités pratiques pour les utilisateurs de votre site web ou de votre application. L'intégration de nouvelles fonctionnalités peut également aider à améliorer l'efficacité et la productivité de votre entreprise en automatisant certaines tâches et en permettant aux utilisateurs d'accomplir plus de choses en moins de temps. L'intégration de fonctionnalités peut se faire de différentes manières, selon les besoins et les spécificités de votre site web ou de votre application. Cela peut impliquer le développement de nouvelles fonctionnalités en interne, l'utilisation de plugins ou d'API externes, ou l'intégration de solutions tierces. En résumé, l'intégration de fonctionnalités est un processus important pour améliorer l'expérience utilisateur, augmenter l'efficacité et la productivité, et pour maintenir votre site web ou votre application à jour et compétitif.",
            image : "assets/img/1644419175-typescript.png",
            left: false
        },
        {
            title: "bases de données(Sql, NoSql)",
            describe : "Les bases de données relationnelles SQL, comme MySQL, et les bases de données NoSQL, comme MongoDB, ont des avantages différents qui peuvent être adaptés à différents besoins et cas d'utilisation. Les bases de données SQL ont des schémas rigides, qui imposent des règles sur la façon dont les données doivent être stockées et structurées. Cela peut rendre les bases de données SQL plus adaptées aux applications qui ont des structures de données bien définies et qui ont besoin d'une gestion stricte des transactions. Les bases de données SQL sont également connues pour leur fiabilité et leur stabilité, ce qui les rend adaptées aux entreprises qui ont besoin d'un stockage de données sûr et efficace. D'un autre côté, les bases de données NoSQL comme MongoDB sont plus flexibles en termes de structure de données et n'ont pas de schémas rigides. Cela les rend plus adaptées aux applications qui ont des structures de données complexes et qui ont besoin d'une évolutivité horizontale. Les bases de données NoSQL sont également plus performantes dans le traitement de données non structurées ou semi-structurées, comme les données en temps réel ou les données de texte. Les bases de données NoSQL sont également connues pour leur évolutivité et leur facilité de mise à l'échelle. Elles peuvent être utilisées pour des applications en croissance rapide ou avec des volumes de données importants, et peuvent facilement être mises à l'échelle horizontalement pour gérer des demandes croissantes. Les bases de données NoSQL sont également adaptées aux applications de type 'cloud' qui nécessitent une grande disponibilité.     En conclusion, le choix entre une base de données SQL et une base de données NoSQL dépendra des besoins et des objectifs de l'entreprise ou de l'application en question. Les bases de données SQL sont idéales pour des applications avec des structures de données bien définies et qui nécessitent une gestion stricte des transactions, tandis que les bases de données NoSQL sont plus adaptées aux applications avec des structures de données complexes et qui nécessitent une évolutivité horizontale et une grande disponibilité.",
            image: "assets/img/mongodb-vs-mysql.webp",
            left: true
        },
        {
            title : "Sécurité des requêtes HTTP",
            describe: "l est important de sécuriser les requêtes HTTP d'une application web pour plusieurs raisons. Tout d'abord, lorsque les requêtes HTTP ne sont pas sécurisées, elles peuvent être interceptées par des tiers malveillants qui peuvent accéder aux données confidentielles de l'utilisateur, telles que les noms d'utilisateur et les mots de passe. Cela peut mettre en danger les données personnelles de l'utilisateur et compromettre la sécurité de l'application dans son ensemble. Ensuite, une requête HTTP non sécurisée peut être altérée en transit, ce qui peut entraîner des erreurs ou des résultats imprévus. Par exemple, un tiers malveillant peut modifier une requête HTTP non sécurisée pour injecter du code malveillant ou des instructions dans l'application, ce qui peut mettre en danger la sécurité de l'ensemble du système. En outre, les requêtes HTTP non sécurisées peuvent également donner lieu à des attaques de type 'man-in-the-middle' ou MITM, où un attaquant intercepte les communications entre l'utilisateur et l'application. L'attaquant peut alors modifier les requêtes ou les réponses pour accéder à des informations confidentielles ou introduire du code malveillant. Enfin, la sécurisation des requêtes HTTP est une exigence réglementaire pour de nombreuses entreprises. Par exemple, si une application collecte et stocke des données personnelles, elle doit se conformer aux réglementations en matière de protection des données, telles que le RGPD. La non-sécurisation des requêtes HTTP peut entraîner des amendes et des sanctions pour l'entreprise. En conclusion, la sécurisation des requêtes HTTP est une pratique essentielle pour garantir la sécurité et la confidentialité des données de l'utilisateur, éviter les erreurs et les résultats imprévus, prévenir les attaques de type MITM et se conformer aux réglementations en matière de protection des données.",
            image: "assets/img/injections_SQL.jpg",
            left: false
        },
        {
            title: "Mise à jour des applications" ,
            describe : "Il est important de mettre à jour les applications régulièrement pour plusieurs raisons. Tout d'abord, les mises à jour des applications permettent de corriger les vulnérabilités de sécurité et les bugs. Les vulnérabilités de sécurité sont des failles dans le code qui peuvent être exploitées par des tiers malveillants pour accéder à des informations sensibles ou pour endommager le système. Les bugs peuvent également causer des problèmes pour les utilisateurs, tels que des erreurs ou des plantages de l'application. En appliquant régulièrement des mises à jour, ces problèmes peuvent être corrigés, améliorant ainsi la sécurité et la fiabilité de l'application. Ensuite, les mises à jour peuvent ajouter de nouvelles fonctionnalités ou améliorer les fonctionnalités existantes de l'application. Les développeurs peuvent mettre à jour l'application pour répondre aux besoins changeants des utilisateurs, en ajoutant des fonctionnalités qui améliorent l'expérience utilisateur ou en améliorant la performance de l'application. En outre, les mises à jour permettent également de maintenir la compatibilité de l'application avec les nouvelles versions des systèmes d'exploitation, des navigateurs ou des plates-formes sur lesquelles l'application est utilisée. Les nouveaux systèmes peuvent introduire de nouveaux protocoles, de nouvelles fonctionnalités ou de nouveaux standards de sécurité, et les mises à jour peuvent permettre à l'application de continuer à fonctionner correctement sur ces nouvelles plateformes. Enfin, il est important de mettre à jour les applications pour se conformer aux exigences réglementaires. Les applications qui collectent et stockent des données personnelles doivent se conformer aux réglementations en matière de protection des données, telles que le RGPD. Les mises à jour peuvent aider à garantir que l'application est conforme à ces réglementations en introduisant des fonctionnalités de protection des données. En conclusion, les mises à jour régulières des applications sont importantes pour corriger les vulnérabilités de sécurité et les bugs, ajouter de nouvelles fonctionnalités, maintenir la compatibilité avec les nouvelles plates-formes et se conformer aux réglementations en matière de protection des données.",
            image: "assets/img/6110220-icone-du-systeme-de-mise-a-jour-amelioration-de-l-icone-de-progres-de-l-application-concept-pour-la-conception-graphique-et-web-creer-processus-mise-a-jour-du-systeme-vecteur-fond-bleu-vectoriel.jpg",
            left: true
        },
        {
            title: "SEO (Search Engine Origin)",
            describe : "Le SEO (Search Engine Optimization) est un ensemble de techniques visant à améliorer la visibilité et le classement d'un site ou d'une application dans les résultats des moteurs de recherche. Il est important car cela peut avoir un impact significatif sur le trafic et la visibilité de votre application. En effet, lorsque les utilisateurs effectuent des recherches sur les moteurs de recherche, ils ont tendance à cliquer sur les premiers résultats qui apparaissent. Si votre application est bien optimisée pour les moteurs de recherche, elle aura plus de chances d'apparaître en haut des résultats de recherche, ce qui augmentera la probabilité que les utilisateurs cliquent sur votre application plutôt que sur celles de vos concurrents. L'optimisation SEO comprend des éléments tels que le choix des mots-clés, la création de contenu de qualité, la structuration du contenu de votre application et l'optimisation technique. Cela peut sembler complexe, mais avec l'aide d'un expert en SEO, il est possible de mettre en place une stratégie efficace pour améliorer la visibilité de votre application sur les moteurs de recherche. En fin de compte, un bon classement dans les résultats de recherche peut aider à augmenter le trafic, les conversions et les ventes de votre application. C'est pourquoi il est important de prendre en compte le SEO dans la conception et le développement de votre application.",
            image: "assets/img/comment-ameliorer-durablement-seo-couverture.webp",
            left: false
        }
    ]
}
