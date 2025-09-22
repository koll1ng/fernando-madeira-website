import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Palette, Award, Users, Calendar, Globe } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Sobre Fernando Madeira</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Artista multifacetado desde 1996, explorando o poder transformador da arte através de grafite, escultura,
              pintura e tatuagem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Foto do Artista */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden urban-shadow">
                <img
                  src="/fernando-madeira-photo.png"
                  alt="Fernando Madeira - Artista e Tatuador"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center urban-shadow">
                <Palette className="h-10 w-10 text-accent-foreground" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Minha Jornada Artística</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fernando Madeira é artista multifacetado desde 1996, atuando com grafite, escultura em metal,
                    costura, pintura em aquarela e tatuagem. Sua obra é marcada por uma paleta vibrante e colorida que
                    transmite energia e emoção.
                  </p>
                  <p>
                    Ele acredita no poder transformador da arte. Já realizou projetos no Brasil, Argentina, Alemanha e
                    França, sempre buscando engajar comunidades em diálogos significativos e estimular reflexão e
                    conexão.
                  </p>
                  <p>
                    Sua missão é expressar uma visão criativa que transforma espaços, gera impacto social e valoriza a
                    arte como ferramenta de cidadania.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Filosofia Artística</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "A arte tem o poder de transformar espaços e conectar pessoas. Cada obra é uma oportunidade de criar
                  diálogo, estimular reflexão e valorizar a arte como ferramenta de cidadania e transformação social."
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">No Ateliê</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Processo Criativo</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    No meu ateliê, cada obra nasce de uma conexão profunda entre técnica e emoção. Trabalho com
                    diferentes suportes e materiais, sempre buscando a expressão mais autêntica para cada ideia.
                  </p>
                  <p>
                    O processo criativo é uma jornada de descoberta, onde cores vibrantes e formas orgânicas se
                    encontram para criar narrativas visuais que tocam a alma e transformam espaços.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden urban-shadow">
                  <img
                    src="/fernando-madeira-studio-work.jpeg"
                    alt="Fernando Madeira trabalhando em seu ateliê"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden urban-shadow">
                  <img
                    src="/fernando-tattoo-process.jpeg"
                    alt="Fernando Madeira criando tatuagem artística"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:order-1">
                <h3 className="text-2xl font-semibold text-foreground">Arte na Pele</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A tatuagem é uma das minhas paixões mais profundas - transformar a pele em tela para arte
                    permanente. Cada tatuagem é única, criada especialmente para cada cliente com o mesmo cuidado
                    artístico das minhas pinturas.
                  </p>
                  <p>
                    Utilizo as mesmas cores vibrantes e técnicas orgânicas que caracterizam meu trabalho, adaptando-as
                    para criar peças que se tornam parte da identidade de quem as carrega.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center urban-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">28+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </Card>

            <Card className="p-6 text-center urban-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">4</div>
              <div className="text-sm text-muted-foreground">Países</div>
            </Card>

            <Card className="p-6 text-center urban-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">5</div>
              <div className="text-sm text-muted-foreground">Técnicas Artísticas</div>
            </Card>

            <Card className="p-6 text-center urban-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">∞</div>
              <div className="text-sm text-muted-foreground">Conexões Criadas</div>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Especialidades</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center urban-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Grafite & Arte Urbana</h3>
                <p className="text-muted-foreground">
                  Transformando muros e espaços urbanos em galerias a céu aberto com cores vibrantes e crítica social.
                </p>
              </Card>

              <Card className="p-8 text-center urban-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Pintura & Aquarela</h3>
                <p className="text-muted-foreground">
                  Obras autorais que exploram cores intensas, movimentos e formas livres, revelando emoção em cada tela.
                </p>
              </Card>

              <Card className="p-8 text-center urban-shadow">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Tatuagem & Escultura</h3>
                <p className="text-muted-foreground">
                  Arte corporal personalizada e esculturas em metal que conectam técnica tradicional com inovação.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
