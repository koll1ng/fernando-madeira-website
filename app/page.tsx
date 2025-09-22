import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Palette, Brush, SprayCan as Spray } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Fernando Madeira</span>
                  <br />
                  <span className="text-foreground">Arte que transforma</span>
                  <br />
                  <span className="gradient-text">espaços</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Desde 1996, explorando grafite, aquarela, tatuagem, escultura e artes visuais que conectam pessoas e
                  comunidades no Brasil e no mundo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="urban-shadow">
                  <Link href="/portfolio">
                    Ver Portfólio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden urban-shadow">
                <img
                  src="/fernando-madeira-photo.png"
                  alt="Fernando Madeira - Artista e Tatuador"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center urban-shadow">
                <Palette className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Trabalhos em Destaque</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma prévia das diferentes vertentes artísticas que compõem meu universo criativo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden urban-shadow hover:scale-105 transition-transform duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/colorful-eagle-art.png"
                  alt="Fine Art - Águia Colorida"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Brush className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Fine Art</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Obras autorais que exploram cores, formas e texturas em composições únicas
                </p>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/portfolio#fine-art">
                    Ver mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="group overflow-hidden urban-shadow hover:scale-105 transition-transform duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/vibrant-lion-art.png"
                  alt="Grafites - Leão Vibrante"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Spray className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold">Grafites</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Arte urbana que transforma muros e espaços públicos em galerias a céu aberto
                </p>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/portfolio#grafites">
                    Ver mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="group overflow-hidden urban-shadow hover:scale-105 transition-transform duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/fernando-madeira-f1-pilot-art.jpeg"
                  alt="Projetos - Arte Piloto F1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Projetos</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Colaborações e projetos especiais que expandem os limites da arte urbana
                </p>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/portfolio#projetos">
                    Ver mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para criar algo <span className="gradient-text">extraordinário</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato para discutir seu próximo projeto artístico, seja uma tatuagem personalizada, mural ou obra
            de arte.
          </p>
          <Button asChild size="lg" className="urban-shadow">
            <Link href="/contato">
              Vamos Conversar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
