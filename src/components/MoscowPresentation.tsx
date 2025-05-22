import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

interface SlideData {
  id: number;
  period: string;
  title: string;
  description: string;
  image: string;
  stats: {
    population: string;
    area: string;
    keyEvents: string[];
  };
}

const slides: SlideData[] = [
  {
    id: 1,
    period: "19 век",
    title: "Москва Империи",
    description:
      "Эпоха классицизма и промышленного развития. Строительство железных дорог и первых заводов.",
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&h=600&fit=crop",
    stats: {
      population: "~270 тыс.",
      area: "~70 км²",
      keyEvents: [
        "1812 - Пожар Москвы",
        "1851 - Николаевская ж/д",
        "1862 - Политехнический музей",
      ],
    },
  },
  {
    id: 2,
    period: "1900-1917",
    title: "Серебряный век",
    description:
      "Культурный расцвет и модернизация. Появление трамваев, электричества и первых автомобилей.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    stats: {
      population: "~1,8 млн",
      area: "~180 км²",
      keyEvents: [
        "1903 - Первый трамвай",
        "1908 - МХТ",
        "1912 - Музей изящных искусств",
      ],
    },
  },
  {
    id: 3,
    period: "1917-1991",
    title: "Советская Москва",
    description:
      "Столица СССР. Масштабная реконструкция, строительство метро и сталинских высоток.",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    stats: {
      population: "~8,9 млн",
      area: "~1000 км²",
      keyEvents: [
        "1935 - Метрополитен",
        "1947-1957 - Сталинские высотки",
        "1980 - Олимпиада",
      ],
    },
  },
  {
    id: 4,
    period: "1991-2010",
    title: "Новая Россия",
    description:
      "Рыночная экономика и архитектурный бум. Строительство Москва-Сити и реновация центра.",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c46a?w=800&h=600&fit=crop",
    stats: {
      population: "~11,5 млн",
      area: "~2500 км²",
      keyEvents: [
        "1996 - Проект Москва-Сити",
        "2002 - Новая кольцевая",
        "2010 - Расширение границ",
      ],
    },
  },
  {
    id: 5,
    period: "2010-2024",
    title: "Цифровая Москва",
    description:
      "Умный город и технологическая трансформация. МЦК, МЦД и цифровые сервисы.",
    image:
      "https://images.unsplash.com/photo-1512495039889-523d9de5b7fd?w=800&h=600&fit=crop",
    stats: {
      population: "~12,7 млн",
      area: "~2600 км²",
      keyEvents: ["2016 - МЦК", "2019 - МЦД", "2024 - Цифровая экосистема"],
    },
  },
];

const MoscowPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
      {/* Header */}
      <div className="p-6 text-center border-b border-white/20">
        <h1 className="text-4xl font-bold mb-2">Развитие Москвы</h1>
        <p className="text-purple-200">XIX–XXI век: История великого города</p>
      </div>

      {/* Main Content */}
      <div className="relative min-h-[calc(100vh-120px)]">
        {/* Slide 1: Title Slide */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-1000 data-[active=true]:opacity-100"
          data-active={currentSlide === 0}
        >
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Panel - Image */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 lg:h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {slide.period}
                </span>
                <h2 className="text-2xl font-bold">{slide.title}</h2>
              </div>
            </div>

            {/* Right Panel - Content */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                  {slide.description}
                </p>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-200">
                        {slide.stats.population}
                      </div>
                      <div className="text-sm text-purple-300">Население</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-200">
                        {slide.stats.area}
                      </div>
                      <div className="text-sm text-purple-300">Площадь</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Events */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-purple-200">
                    Ключевые события
                  </h3>
                  <div className="space-y-2">
                    {slide.stats.keyEvents.map((event, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                        <span className="text-purple-100">{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: 1900-1917 Серебряный век */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-1000 data-[active=true]:opacity-100"
          data-active={currentSlide === 1}
        >
          <div className="flex flex-col h-full p-8">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Серебряный век (1900-1917)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
              {/* Population Growth Chart */}
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Рост населения
                  </h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                      data={[
                        { year: "1897", population: 1.04 },
                        { year: "1902", population: 1.17 },
                        { year: "1907", population: 1.35 },
                        { year: "1912", population: 1.62 },
                        { year: "1917", population: 1.85 },
                      ]}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.2)"
                      />
                      <XAxis dataKey="year" stroke="#fff" />
                      <YAxis stroke="#fff" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "none",
                          borderRadius: "8px",
                        }}
                        labelFormatter={(value) => `Год: ${value}`}
                        formatter={(value) => [`${value} млн`, "Население"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="population"
                        stroke="#D6BCFA"
                        strokeWidth={3}
                        dot={{ fill: "#D6BCFA", r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Industrial Development */}
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Промышленное развитие
                  </h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={[
                        { sector: "Текстиль", factories: 45 },
                        { sector: "Металлургия", factories: 23 },
                        { sector: "Пищевая", factories: 67 },
                        { sector: "Химическая", factories: 12 },
                      ]}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.2)"
                      />
                      <XAxis dataKey="sector" stroke="#fff" />
                      <YAxis stroke="#fff" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "none",
                          borderRadius: "8px",
                        }}
                        formatter={(value) => [`${value}`, "Предприятий"]}
                      />
                      <Bar dataKey="factories" fill="#9b87f5" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">147</div>
                  <div className="text-sm">Заводов и фабрик</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">15</div>
                  <div className="text-sm">Высших учебных заведений</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">3</div>
                  <div className="text-sm">Театра мирового уровня</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Slide 3: 1917-1991 Советская Москва */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-1000 data-[active=true]:opacity-100"
          data-active={currentSlide === 2}
        >
          <div className="flex flex-col h-full p-8">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Советская Москва (1917-1991)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
              {/* Territory Expansion */}
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Расширение территории
                  </h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                      data={[
                        { year: "1917", area: 254 },
                        { year: "1930", area: 285 },
                        { year: "1950", area: 356 },
                        { year: "1960", area: 878 },
                        { year: "1970", area: 878 },
                        { year: "1980", area: 994 },
                        { year: "1991", area: 1081 },
                      ]}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.2)"
                      />
                      <XAxis dataKey="year" stroke="#fff" />
                      <YAxis stroke="#fff" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "none",
                          borderRadius: "8px",
                        }}
                        labelFormatter={(value) => `Год: ${value}`}
                        formatter={(value) => [`${value} км²`, "Площадь"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="area"
                        stroke="#9b87f5"
                        fill="url(#areaGradient)"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="areaGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#9b87f5"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#9b87f5"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Metro Development */}
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Развитие метрополитена
                  </h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                      data={[
                        { year: "1935", stations: 13, lines: 1 },
                        { year: "1940", stations: 22, lines: 2 },
                        { year: "1950", stations: 35, lines: 3 },
                        { year: "1960", stations: 58, lines: 4 },
                        { year: "1970", stations: 87, lines: 6 },
                        { year: "1980", stations: 123, lines: 8 },
                        { year: "1991", stations: 150, lines: 9 },
                      ]}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.2)"
                      />
                      <XAxis dataKey="year" stroke="#fff" />
                      <YAxis stroke="#fff" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "none",
                          borderRadius: "8px",
                        }}
                        labelFormatter={(value) => `Год: ${value}`}
                      />
                      <Line
                        type="monotone"
                        dataKey="stations"
                        stroke="#D6BCFA"
                        strokeWidth={3}
                        name="Станции"
                      />
                      <Line
                        type="monotone"
                        dataKey="lines"
                        stroke="#FEC6A1"
                        strokeWidth={3}
                        name="Линии"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">8.9</div>
                  <div className="text-sm">млн жителей (1991)</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">150</div>
                  <div className="text-sm">станций метро</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">1081</div>
                  <div className="text-sm">км² территории</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">76</div>
                  <div className="text-sm">вузов</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Icon name="ChevronLeft" size={16} />
            Назад
          </Button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-purple-300 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Далее
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-white/20">
        <div
          className="h-full bg-purple-300 transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default MoscowPresentation;
