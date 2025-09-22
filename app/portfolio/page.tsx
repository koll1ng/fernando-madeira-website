import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, MapPin } from "lucide-react"

export default function PortfolioPage() {
  const portfolioSections = [
    {
      id: "fine-art",
      title: "Fine Art",
      description:
        "As fine arts de Fernando Madeira são inspiradas nas opalas brasileiras, pedras conhecidas por suas cores vibrantes e padrões fascinantes. Usando ferramentas digitais, ele cria composições visuais que refletem a luminosidade e a iridescência das opalas. O resultado é uma fusão entre natureza e tecnologia, em que cada pixel brilha como as pedras que o inspiram.",
      images: [
        { src: "/colorful-eagle-art.png", title: "Águia Iridescente" },
        { src: "/vibrant-rhino-art.jpeg", title: "Rinoceronte Digital" },
        { src: "/colorful-lion-portrait.jpeg", title: "Leão Luminoso" },
        { src: "/vibrant-lion-art.png", title: "Felino Tecnológico" },
        { src: "/colorful-wolf-art.jpeg", title: "Lobo Selvagem" },
        { src: "/vibrant-horse-art.png", title: "Cavalo em Movimento" },
        { src: "/vibrant-fox-art.png", title: "Raposa Colorida" },
        { src: "/anatomical-heart-art.png", title: "Coração Anatômico" },
        { src: "/colorful-elephant-art.jpeg", title: "Elefante Majestoso" },
        { src: "/fox-human-hybrid-art.jpeg", title: "Conexão Selvagem" },
        { src: "/conceptual-woman-heart-art.jpeg", title: "Alma Feminina" },
        { src: "/subtle-horse-art.png", title: "Elegância Equina" },
        { src: "/watercolor-foxes-embrace.jpeg", title: "Abraço Selvagem" },
        { src: "/anatomical-heart-watercolor.jpeg", title: "Coração Vibrante" },
        { src: "/elephant-family-sketch.jpeg", title: "Família Elefante" },
        { src: "/fox-painted-stone.jpeg", title: "Raposa em Pedra" },
        { src: "/detailed-anatomical-heart-closeup.jpeg", title: "Anatomia Detalhada" },
        { src: "/colorful-female-portraits-studio.jpeg", title: "Retratos Femininos" },
        { src: "/musical-surreal-artwork.jpeg", title: "Sinfonia Visual" },
      ],
    },
    {
      id: "pinturas",
      title: "Pinturas",
      description:
        "Pinturas autorais que exploram cores intensas, movimentos e formas livres, revelando emoção e energia em cada tela.",
      images: [
        { src: "/fernando-madeira-f1-pilot-art.jpeg", title: "Velocidade e Paixão" },
        { src: "/colorful-lion-portrait.jpeg", title: "Energia Felina" },
        { src: "/vibrant-horse-art.png", title: "Movimento Livre" },
        { src: "/colorful-wolf-art.jpeg", title: "Instinto Selvagem" },
        { src: "/vibrant-fox-art.png", title: "Esperteza Natural" },
        { src: "/anatomical-heart-art.png", title: "Pulsação Vital" },
        { src: "/colorful-elephant-art.jpeg", title: "Força Ancestral" },
        { src: "/conceptual-woman-heart-art.jpeg", title: "Essência Humana" },
        { src: "/fox-human-hybrid-art.jpeg", title: "Dualidade Natural" },
        { src: "/watercolor-foxes-embrace.jpeg", title: "Ternura Aquarela" },
        { src: "/anatomical-heart-watercolor.jpeg", title: "Anatomia Colorida" },
        { src: "/elephant-family-sketch.jpeg", title: "Laços Familiares" },
        { src: "/colorful-female-portraits-studio.jpeg", title: "Figuras Femininas" },
        { src: "/musical-surreal-artwork.jpeg", title: "Melodia Colorida" },
      ],
    },
    {
      id: "tatuagens",
      title: "Tatuagens",
      description:
        "Arte corporal personalizada que transforma a pele em tela permanente. Cada tatuagem é única, criada com o mesmo cuidado artístico das pinturas, adaptando cores vibrantes e técnicas orgânicas para criar peças que se tornam parte da identidade de quem as carrega.",
      images: [
        { src: "/fernando-tattoo-process.jpeg", title: "Processo Criativo" },
        { src: "/vibrant-fox-art.png", title: "Raposa Tatuagem" },
        { src: "/anatomical-heart-art.png", title: "Coração Anatômico" },
        { src: "/colorful-wolf-art.jpeg", title: "Lobo Colorido" },
        { src: "/watercolor-foxes-embrace.jpeg", title: "Raposas Aquarela" },
        { src: "/anatomical-heart-watercolor.jpeg", title: "Coração Vibrante" },
      ],
    },
    {
      id: "grafites",
      title: "Grafites",
      description:
        "Os grafites de Fernando Madeira transformam o espaço urbano em grandes telas de expressão. Suas obras são marcadas por cores vibrantes e crítica social, trazendo vida a muros, viadutos e fachadas.",
      images: [
        { src: "/colorful-graffiti-under-bridge-viaduct-campinas.jpg", title: "Viaduto Colorido" },
        { src: "/butterfly-graffiti-panel-tribute-lucio-costa.jpg", title: "Borboletas Urbanas" },
        { src: "/community-art-revitalization-project-campinas.jpg", title: "Revitalização Comunitária" },
        { src: "/collaborative-colorful-city-walls-project-google.jpg", title: "Muros Colaborativos" },
        { src: "/surreal-graffiti-art.png", title: "Arte Surrealista" },
        { src: "/live-painting-bookstore-mural.jpeg", title: "Live Painting Cultural" },
        { src: "/fernando-painting-fish-mural.jpeg", title: "Processo Criativo" },
      ],
    },
    {
      id: "suportes-alternativos",
      title: "Suportes Alternativos",
      description:
        "Fernando Madeira explora diferentes suportes além das telas tradicionais, transformando pedras, objetos urbanos e espaços culturais em obras de arte. Esta versatilidade demonstra como a arte pode se adaptar e florescer em qualquer superfície, criando conexões únicas entre o meio e a mensagem.",
      images: [
        { src: "/fox-painted-stone.jpeg", title: "Arte em Pedra" },
        { src: "/live-painting-bookstore-mural.jpeg", title: "Mural em Livraria" },
        { src: "/surreal-graffiti-art.png", title: "Graffiti Conceitual" },
        { src: "/fernando-tattoo-process.jpeg", title: "Arte Corporal" },
        { src: "/fernando-painting-fish-mural.jpeg", title: "Mural em Tijolo" },
      ],
    },
  ]

  const projects = [
    {
      title: "Colorir Campinas",
      description:
        "Galeria a céu aberto criada sob viadutos de Campinas, trazendo cor e vida ao espaço urbano através do grafite.",
      location: "Campinas, SP",
      year: "2023",
      image: "/colorful-graffiti-under-bridge-viaduct-campinas.jpg",
      tags: ["Arte Urbana", "Galeria", "Viadutos"],
    },
    {
      title: "Casa Cor Campinas",
      description: "Painel de grafite com borboletas, em homenagem a Lucio Costa.",
      location: "Campinas, SP",
      year: "2023",
      image: "/butterfly-graffiti-panel-tribute-lucio-costa.jpg",
      tags: ["Homenagem", "Borboletas", "Casa Cor"],
    },
    {
      title: "Maluco Beleza – Cândido Ferreira",
      description:
        "Projeto de revitalização artística que restaurou e deu vida a um espaço icônico de Campinas, fortalecendo o vínculo comunitário.",
      location: "Campinas, SP",
      year: "2022",
      image: "/community-art-revitalization-project-campinas.jpg",
      tags: ["Revitalização", "Comunidade", "Patrimônio"],
    },
    {
      title: "Color+City",
      description:
        "Projeto colaborativo que deixa muros e fachadas das cidades mais coloridos. Idealizado por Victor Garcia e Gabriel Pinheiro, apoiado pelo Google e por diversos artistas.",
      location: "Várias Cidades",
      year: "2022",
      image: "/collaborative-colorful-city-walls-project-google.jpg",
      tags: ["Colaborativo", "Google", "Múltiplas Cidades"],
    },
    {
      title: "PROAC Campinas – Uso e Desuso",
      description:
        "Exposição que buscou conscientizar a população sobre sustentabilidade e preservação da cidade, com grafites em lixeiras públicas. Estilo New School, com cores vibrantes e psicodélicas.",
      location: "Campinas, SP",
      year: "2021",
      image: "/psychedelic-graffiti-trash-cans-sustainability-new.jpg",
      tags: ["PROAC", "Sustentabilidade", "New School"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Portfólio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma jornada visual através das diferentes expressões artísticas que compõem meu universo criativo
            </p>
          </div>

          {/* Portfolio Sections */}
          {portfolioSections.map((section, index) => (
            <section key={section.id} id={section.id} className="mb-20">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="gradient-text">{section.title}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{section.description}</p>
              </div>

              <div className="art-grid">
                {section.images.map((image, imageIndex) => (
                  <Card
                    key={imageIndex}
                    className="group overflow-hidden urban-shadow hover:scale-105 transition-transform duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">{image.title}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          {/* Projects Section */}
          <section id="projetos" className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Projetos Especiais</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Colaborações e projetos que expandem os limites da arte urbana, criando impacto social e cultural nas
                comunidades
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden urban-shadow hover:scale-105 transition-transform duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                      <MapPin className="h-4 w-4 ml-2" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="exposicoes" className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Exposições</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Participações em exposições e mostras que celebram a arte urbana contemporânea
              </p>
            </div>

            <Card className="p-8 urban-shadow">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Suportes Urbanos</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>2023</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>Galeria de Arte Geraldo Jurgensen, Campinas</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Exposição realizada na Galeria de Arte Geraldo Jurgensen, em Campinas. Fernando utilizou muros,
                    postes, margens de córregos e objetos urbanos como suportes artísticos. Sua obra destacou a crítica
                    social ao consumismo e ao descartável, mostrando a cidade como um reduto artístico inesgotável.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Suportes Urbanos</Badge>
                    <Badge variant="secondary">Crítica Social</Badge>
                    <Badge variant="secondary">Campinas</Badge>
                  </div>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Catálogo
                  </Button>
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/urban-art-exhibition-gallery-geraldo-jurgensen-cam.jpg"
                    alt="Exposição Suportes Urbanos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
